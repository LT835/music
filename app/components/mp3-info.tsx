// 'use client'
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import * as mm from 'music-metadata-browser';

// interface SongUrl {
//     url: string;
// }

// const Mp3Info: React.FC<SongUrl> = ({ url }) => {
//     const [metadata, setMetadata] = useState<any>(null);

//     useEffect(() => {
//         async function parseMP3Details() {
//             try {
//                 const response = await fetch(url);
//                 const arrayBuffer = await response.arrayBuffer();
//                 const metadata = await mm.parseBlob(new Blob([arrayBuffer]));
//                 setMetadata(metadata);
//                 console.log(metadata)
//             } catch (error) {
//                 console.error('解析 MP3 文件失败：', error);
//             }
//         }

//         parseMP3Details();
//     }, [url]);

//     return (
//         <div>
//             {metadata && metadata.common.picture && metadata.common.picture.map((picture: any, index: number) => (
//                 <div key={index}>
//                     <Image width={picture.width || 110} height={picture.height || 110} alt={metadata.common.title} src={`data:${picture.format};base64,${picture.data.toString('base64')}`} className="rounded-lg" />
//                     <span className="inline-block w-[112px] h-6 overflow-hidden truncate text-[14px] p-1">{metadata.common.title}</span>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Mp3Info;