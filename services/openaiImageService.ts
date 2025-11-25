// OpenAI Images API helpers
// Returns base64 (no data: prefix) for edit; data URL for generation (for convenience)

const OPENAI_IMAGE_EDIT_KEY = process.env.OPENAI_IMAGE_EDIT_KEY || process.env.VITE_OPENAI_IMAGE_EDIT_KEY || '';
const OPENAI_TEXT_TO_IMAGE_KEY = process.env.OPENAI_TEXT_TO_IMAGE_KEY || process.env.VITE_OPENAI_TEXT_TO_IMAGE_KEY || '';

function base64ToFile(base64: string, mimeType: string, filename: string) {
  const byteString = atob(base64);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  const blob = new Blob([ia], { type: mimeType });
  return new File([blob], filename, { type: mimeType });
}

export async function editImageWithOpenAI(base64ImageData: string, mimeType: string, prompt: string): Promise<string> {
  const OPENAI_API_KEY = OPENAI_IMAGE_EDIT_KEY;
  if (!OPENAI_API_KEY) throw new Error('OpenAI API key missing');
  const file = base64ToFile(base64ImageData, mimeType || 'image/png', 'source.png');

  const form = new FormData();
  form.append('model', 'gpt-image-1');
  form.append('image', file);
  form.append('prompt', prompt);
  form.append('size', '1024x1024');
  // Note: mask is optional; without mask, whole image is guided by prompt

  const res = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: form as any,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`OpenAI image edit error: ${res.status} ${res.statusText} ${text}`);
  }
  const json = await res.json();
  const b64 = json?.data?.[0]?.b64_json as string | undefined;
  if (!b64) throw new Error('OpenAI returned no image');
  return b64; // base64 without data: prefix
}

export async function generateImageWithOpenAI(prompt: string, negativePrompt?: string): Promise<string> {
  const OPENAI_API_KEY = OPENAI_TEXT_TO_IMAGE_KEY;
  if (!OPENAI_API_KEY) throw new Error('OpenAI API key missing');
  const payload: any = {
    model: 'gpt-image-1',
    prompt,
    size: '1024x1024',
    // OpenAI Images API does not support explicit negative_prompt; include it in prompt if provided
  };
  if (negativePrompt && negativePrompt.trim()) {
    payload.prompt = `${prompt}\nNegative prompt: ${negativePrompt}`;
  }

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`OpenAI text-to-image error: ${res.status} ${res.statusText} ${text}`);
  }
  const json = await res.json();
  const b64 = json?.data?.[0]?.b64_json as string | undefined;
  if (!b64) throw new Error('OpenAI returned no image');
  return `data:image/png;base64,${b64}`;
}


