import { NextPage } from "next";
import Image from "next/image";
import SampleImage from "../../public/images/sample.png";

const ImageSample: NextPage = () => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/sample.png" alt="両手に剣と杖を持った美しいエルフ" />
      <p>Imageコンポーネントで表示した場合</p>
      <Image
        src={SampleImage}
        alt="両手に剣と杖を持った美しいエルフ"
        placeholder="blur"
      />
      <p>Imageで表示した場合は事前に描画領域が確保されます</p>
    </div>
  );
};

export default ImageSample;
