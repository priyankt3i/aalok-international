import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

const fashionShowImages = [
  '/fashion-show/6daef0_0b04a7cb2c2a43f0910e3d1ce6846a9b.jpg',
  '/fashion-show/6daef0_0c1673153cfd4f27b002053d9caba960.jpg',
  '/fashion-show/6daef0_0ec08e3af5b047999854e113f6a16c55.jpg',
  '/fashion-show/6daef0_1ca8d2435363490695d81763faa7948f.jpg',
  '/fashion-show/6daef0_1e2a6f6668434afa9d4808ae666a2172.jpg',
  '/fashion-show/6daef0_2a02d7f1f6ac41529b0ac15e7edb046e.jpg',
  '/fashion-show/6daef0_2b808e3a14ef4869bcd17faa5fc5a660.jpg',
  '/fashion-show/6daef0_2b62145268804ed88da2cf3bc1b57cd8.jpg',
  '/fashion-show/6daef0_2e0b3b7d2e6c4e4091e59d86aad9ac3b.jpg',
  '/fashion-show/6daef0_2e7e13322d4c4546b11bcbcab612343b.jpg',
  '/fashion-show/6daef0_3b2df7d6346549c993c0259aa35da21e.jpg',
  '/fashion-show/6daef0_3c9fa48e9455467f919a0d6649cabb0c.jpg',
  '/fashion-show/6daef0_4ddbd9f2f91c43e6abd54c6bc85345a3.jpg',
  '/fashion-show/6daef0_4f9e605fab9e49c3b5164f78a3f1c4dc.jpg',
  '/fashion-show/6daef0_6fc36ebbcedc436bac85e025a11eeff9.jpg',
  '/fashion-show/6daef0_7e132f8315954194915ae7f8b8a95b53.jpg',
  '/fashion-show/6daef0_7f3e913d6c0e48f48a375cdd0f83bbf7.jpg',
  '/fashion-show/6daef0_7fe5fd2dbac64855bd2584d8d57467b1.jpg',
  '/fashion-show/6daef0_08c9df215eb345d7b2f62ce1d322ed07.jpg',
  '/fashion-show/6daef0_8c57990e599946b5b1d2913ffa47a1c3.jpg',
  '/fashion-show/6daef0_8fd49282658747b9b815e203a9f6c4dd.jpg',
  '/fashion-show/6daef0_9b9b5aa1b6644fa2a173bff77300225a.jpg',
  '/fashion-show/6daef0_9b5210c488e145ec8423fc4a348bd13c.jpg',
  '/fashion-show/6daef0_12da86fb84ef4493931159977aa117ad.jpg',
  '/fashion-show/6daef0_24b3a9f5e8e34131a1431fbb54d95d7a.jpg',
  '/fashion-show/6daef0_25db1a9e0fb94aa3aab59aae5c13e7ce.jpg',
  '/fashion-show/6daef0_32eb69dc14a646d182924cae98a2f204.jpg',
  '/fashion-show/6daef0_50baf84e04224295b5f81ff4ec4ac172.jpg',
  '/fashion-show/6daef0_050dc1a14aad49e18d53c4880428f3dc.jpg',
  '/fashion-show/6daef0_51c59053a37246529390e90490a29eec.jpg',
  '/fashion-show/6daef0_57d24ba64ae24d5e8edda18558b2525f.jpg',
  '/fashion-show/6daef0_58b62cc12bdf4d77aa8ba21161ecab42.jpg',
  '/fashion-show/6daef0_58f3fa3ac19e4339831ef3e8025542dd.jpg',
  '/fashion-show/6daef0_70d0f055e80c4c01811181fbec0a7ff6.jpg',
  '/fashion-show/6daef0_85ba573fc4594de1ac9cb4ac3a9cd8f7.jpg',
  '/fashion-show/6daef0_85e6cd9a67364743a7c7a74a64555021.jpg',
  '/fashion-show/6daef0_85fd21fe882641aea232183cfaa1abc0.jpg',
  '/fashion-show/6daef0_90acae5487014f03970888d555d65f97.jpg',
  '/fashion-show/6daef0_91da16e103274c4ab7ac4288b6738e2e.jpg',
  '/fashion-show/6daef0_513bc48d9cdf473a92ff6e8d160d44f7.jpg',
  '/fashion-show/6daef0_643bf05645a64f46a9041fefc3008137.jpg',
  '/fashion-show/6daef0_644c9958010a4f20ad66daa28169b1fd.jpg',
  '/fashion-show/6daef0_763dd777c25944d38e3e20d85ff97d9e.jpg',
  '/fashion-show/6daef0_900de8b754664624ad7da6bf58e8d00e.jpg',
  '/fashion-show/6daef0_0913d74333da49f3a84f796f289b3ff3.jpg',
  '/fashion-show/6daef0_3928e0aaeef3497bb56c0b9dc55c47a4.jpg',
  '/fashion-show/6daef0_4573d839f3134f7999f00a0321eddebd.jpg',
  '/fashion-show/6daef0_5020e570ff9f4dde9fbeddfcd8c57e72.jpg',
  '/fashion-show/6daef0_5705c626f32742ca93fd958d987e865f.jpg',
  '/fashion-show/6daef0_6584ae5d6c96492cbf5765b05830af14.jpg',
  '/fashion-show/6daef0_6951f97344f9443b998feb6167952085.jpg',
  '/fashion-show/6daef0_7027b41f25364a808c097f7dc48aee16.jpg',
  '/fashion-show/6daef0_7114ec1205354d52a817dcebdf99f558.jpg',
  '/fashion-show/6daef0_8316a6e522e840658e51e69fdb7e91aa.jpg',
  '/fashion-show/6daef0_8452b7af234c4d0aa0031c899b41fbe6.jpg',
  '/fashion-show/6daef0_23398bd209394157bdba0d54ace50259.jpg',
  '/fashion-show/6daef0_024614a4ff8645b49a56378143a7e9cf.jpg',
  '/fashion-show/6daef0_53547f0c705744f8bc4adc2729c8d7e0.jpg',
  '/fashion-show/6daef0_58769d0284824f408c85aec1e5ee8db5.jpg',
  '/fashion-show/6daef0_2716210f7ead43fc86dcfed6119a29f7.jpg',
  '/fashion-show/6daef0_7600550c4dcf43d2906bd44dc05d9e51.jpg',
  '/fashion-show/6daef0_044474035b714d32976247f4a81049bc.jpg',
  '/fashion-show/6daef0_52927352d9274ffeb588b7aa22012340.jpg',
  '/fashion-show/6daef0_238902658f324c25a18fdbe821d27c73.jpg',
  '/fashion-show/6daef0_942568233c7d42fbb0f243d953203542.jpg',
  '/fashion-show/6daef0_a1d5e415e6364345a33027029e800382.jpg',
  '/fashion-show/6daef0_a4c43e024c4f42eba109b296dfd1e83d.jpg',
  '/fashion-show/6daef0_a9be7b68fe65412b9a90147d2fc752c1.jpg',
  '/fashion-show/6daef0_a88d8cf9750c4f82b9b442009e0a2629.jpg',
  '/fashion-show/6daef0_aa816fdbf48c4b95be1dfeaabe2d05f6.jpg',
  '/fashion-show/6daef0_aae1834196b84c61a26ed8946a72e55a.jpg',
  '/fashion-show/6daef0_ac18b50c3300485d83874b06e147083c.jpg',
  '/fashion-show/6daef0_aeadec751de941d2aa546e1ea271fc1e.jpg',
  '/fashion-show/6daef0_aef2750225b548498e4623a87bea8cf1.jpg',
  '/fashion-show/6daef0_b531c3944b51463399d531d5cb342ec2.jpg',
  '/fashion-show/6daef0_b605badd6f674c9697d648c82ae52d80.jpg',
  '/fashion-show/6daef0_b7936e9b1d73428d82a150e026b5e184.jpg',
  '/fashion-show/6daef0_b9256eb723f2451ab92823082d657a7f.jpg',
  '/fashion-show/6daef0_bf9355a2dc484eed839f47e5e13ebde3.jpg',
  '/fashion-show/6daef0_c7b9731d20c44557949e1e3c4f4bbcf4.jpg',
  '/fashion-show/6daef0_c156e725037d4eccac53cf320aee5a11.jpg',
  '/fashion-show/6daef0_c80272d3b7fc43088d278c72db441e1a.jpg',
  '/fashion-show/6daef0_cb0051650810491f8d60ae40b51cdb73.jpg',
  '/fashion-show/6daef0_d526a1eba46e42319039e2baefbf9f38.jpg',
  '/fashion-show/6daef0_db28a4852b5149b0b845b55d7b2cd7d3.jpg',
  '/fashion-show/6daef0_debb1c940f2846bca3ea2be3504c814e.jpg',
  '/fashion-show/6daef0_df36f4be0dc64d2c8ec426de42963e8f.jpg',
  '/fashion-show/6daef0_e3dc42d99c0240008abbaa74dfbd5868.jpg',
  '/fashion-show/6daef0_e4fbcc8053504e9e99eebaaa4b413009.jpg',
  '/fashion-show/6daef0_e6cadcd0800e46ca9e5b6311de955504.jpg',
  '/fashion-show/6daef0_e995f2454c4f4f3b8a9325b433ffa8df.jpg',
  '/fashion-show/6daef0_e6295358356b49e39fe3ba3696aea5a0.jpg',
  '/fashion-show/6daef0_ece72257491043b9909e74aea19911fa.jpg',
  '/fashion-show/6daef0_ed899d1311ad44a2b01ec499d5d38bf6.jpg',
  '/fashion-show/6daef0_f1bd2b35a1e64fdea8f1ee47fc41d641.jpg',
  '/fashion-show/6daef0_f4adf0ff48624c9fa2226ccdb7e4d9e8.jpg',
  '/fashion-show/6daef0_f5c0c940946f4bb7a244b0cce83b093a.jpg',
  '/fashion-show/6daef0_f5c1fb441df74e54ad4a78368007179c.jpg',
  '/fashion-show/6daef0_f06be90d52044e459775316806749280.jpg',
  '/fashion-show/6daef0_f33c1f6ca3954dab81bff13c2e7ca21b.jpg',
  '/fashion-show/6daef0_f51d0070dabe4972ab9565304065ec1a.jpg',
  '/fashion-show/6daef0_f55d97db8bbd486c812108c5412dfb66.jpg',
  '/fashion-show/6daef0_fb0b469e64d64121920675b5fbaab4bc.jpg',
  '/fashion-show/6daef0_fb190b4345564d7b90ee634b5c81ec78.jpg',
  '/fashion-show/6daef0_fb555a2c0af34f56a05f8b5bd1ea64b4.jpg',
  '/fashion-show/6daef0_fb794726e666452787a6bab058b12953.jpg',
  '/fashion-show/6daef0_fef47716848b448a8ac8a07a71d2dcd9.jpg',
  '/fashion-show/6daef0_ff0932af88e5475f84efc10a1d2cdcef.jpg',
];

const FashionShowGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Function to chunk the array into columns for masonry layout
  const chunkArray = (arr: string[], numChunks: number) => {
    const chunks: string[][] = Array.from({ length: numChunks }, () => []);
    arr.forEach((item, index) => {
      chunks[index % numChunks].push(item);
    });
    return chunks;
  };

  const columns = chunkArray(fashionShowImages, 4); // 4 columns for md:grid-cols-4

  return (
    <section id="fashion-show-gallery" className="py-16 lg:py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Aalok International Fashion Show Gallery</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore our stunning collections from various fashion shows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((imageSrc, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer"
                    src={imageSrc}
                    alt={`Fashion Show Image ${colIndex}-${imgIndex}`}
                    onClick={() => openModal(imageSrc)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ImageModal src={selectedImage} alt="Full screen fashion show image" onClose={closeModal} />
    </section>
  );
};

export default FashionShowGallery;
