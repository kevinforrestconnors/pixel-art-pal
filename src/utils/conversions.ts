import { Image } from "image-js";

export async function imageToPixelArray(
  img: string
): Promise<Uint8Array | Uint8ClampedArray> {
  const image = await Image.load(img);
  return image.getRGBAData({ clamped: true });
}
