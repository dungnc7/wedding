import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <Html lang="vi">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        
        {/* Script để xử lý vấn đề định tuyến với GitHub Pages */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var pathSegments = window.location.pathname.split('/');
              var basePath = '${basePath}';
              
              // Xử lý trong trường hợp người dùng vào một route trực tiếp
              if (pathSegments.length > 2 && pathSegments[1] === 'wedding') {
                // Đây là định tuyến GitHub Pages
                window.history.replaceState(
                  {}, 
                  document.title,
                  window.location.pathname
                );
              }
            })();
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}