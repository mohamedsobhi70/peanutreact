import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="mt-2">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white shadow-main border-20 px-5">
          <Link className="navbar-brand" to="/" aria-label="brandname">
            <svg
              width="148"
              height="46"
              viewBox="0 0 148 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.2248 46.0001C5.01797 46.0001 2.40894 43.3664 2.40894 40.1293V19.0905C2.40894 18.1981 3.12579 17.477 4.00728 17.477C4.88878 17.477 5.60563 18.2007 5.60563 19.0905V40.1267C5.60563 41.5842 6.78097 42.7707 8.2248 42.7707C9.66863 42.7707 10.844 41.5842 10.844 40.1267V34.0105C10.844 33.4326 11.1505 32.8982 11.6444 32.6118C12.1409 32.3254 12.7513 32.3254 13.2453 32.6169C15.373 33.8673 17.8048 34.527 20.2719 34.527C24.0487 34.527 27.5874 33.0337 30.2395 30.3207C32.8916 27.6078 34.3253 24.0152 34.2771 20.2002C34.1783 12.5088 27.7925 6.24936 20.0389 6.24936C19.1549 6.24936 18.4406 5.52574 18.4406 4.63591C18.4406 3.74609 19.1574 3.02246 20.0389 3.02246C29.5302 3.02246 37.3522 10.7087 37.4738 20.1593C37.5346 24.8437 35.7742 29.257 32.5167 32.5888C29.2592 35.9205 24.9099 37.7564 20.2719 37.7564C18.1341 37.7564 16.019 37.3524 14.0407 36.5751V40.1293C14.0407 43.3664 11.4316 46.0001 8.2248 46.0001Z"
                fill="#1B69B1"
              />
              <path
                className="peanut-img"
                d="M22.1666 12.5803C22.1666 12.5778 22.1666 12.5752 22.1692 12.5752C19.0383 11.9615 16.5256 9.46337 15.8391 6.31573C15.8366 6.31573 15.834 6.31573 15.834 6.31829C15.0311 2.70272 11.8344 0 8.01201 0C3.58679 0 0 3.62068 0 8.08772C0 12.0689 2.84714 15.3751 6.59857 16.0476L6.59604 16.0501C9.8662 16.7584 11.6419 19.1696 12.3334 21.9235C13.03 25.6746 16.29 28.5128 20.2061 28.5128C24.6313 28.5128 28.2181 24.8922 28.2181 20.4251C28.2206 16.6382 25.6445 13.4625 22.1666 12.5803Z"
                fill="#F7AB4B"
              />
              <path
                d="M55.2913 27.5999C53.926 27.5999 52.6494 27.2112 51.5196 26.5797V30.2668C51.5196 31.3152 50.6584 32.1846 49.5894 32.1846C48.5205 32.1846 47.7175 31.3152 47.7175 30.3563V14.2602C47.7175 13.2706 48.5205 12.4626 49.4983 12.4626C50.21 12.4626 50.8357 12.8819 51.1321 13.511C52.3201 12.7004 53.7462 12.2529 55.2888 12.2529C59.4759 12.2529 62.86 15.669 62.86 19.8957C62.8626 24.1505 59.4784 27.5999 55.2913 27.5999ZM55.2913 16.1191C53.2117 16.1191 51.5196 17.7965 51.5196 19.8957C51.5196 21.995 53.2117 23.7338 55.2913 23.7338C57.3709 23.7338 59.063 21.995 59.063 19.8957C59.063 17.7965 57.3709 16.1191 55.2913 16.1191Z"
                fill="#3B3A3C"
              />
              <path
                d="M67.8526 21.0952C68.6252 23.9437 72.5438 24.992 75.1883 23.284C75.9913 22.6856 77.0577 22.9234 77.5947 23.7647C78.1292 24.5752 77.9519 25.6824 77.1793 26.1938C72.8731 29.1011 66.9635 27.6027 64.9143 23.1663C62.5383 18.28 66.1606 12.3452 71.6851 12.3452C74.2688 12.3452 76.584 13.6953 78.0101 15.9122C78.8714 17.3518 79.4362 19.0905 78.7827 20.2591C78.1596 21.1591 77.1489 21.0977 76.0496 21.0977H67.8526V21.0952ZM75.396 18.3362C75.0693 16.7483 73.5241 15.6079 71.6851 15.6079C69.8132 15.6079 68.2706 16.7483 67.9134 18.3362H75.396Z"
                fill="#3B3A3C"
              />
              <path
                d="M95.8859 14.26V25.6513C95.8859 26.6409 95.0551 27.4489 94.0444 27.4489C93.3326 27.4489 92.7069 27.0296 92.4106 26.4005C91.2226 27.2111 89.7965 27.6586 88.2538 27.6586C84.0667 27.6586 80.7104 24.2118 80.7104 19.9851C80.7104 15.7891 84.0667 12.3423 88.2538 12.3423C89.7686 12.3423 91.1947 12.7923 92.3827 13.5722C92.6487 12.9125 93.3022 12.4625 94.0444 12.4625C95.0551 12.4599 95.8859 13.2705 95.8859 14.26ZM92.0863 19.9851C92.0863 17.9165 90.3943 16.2084 88.3146 16.2084C86.235 16.2084 84.5429 17.9165 84.5429 19.9851C84.5429 22.0844 86.235 23.7924 88.3146 23.7924C90.3943 23.7924 92.0863 22.0844 92.0863 19.9851Z"
                fill="#3B3A3C"
              />
              <path
                d="M111.18 18.8446V25.5285C111.18 26.5769 110.349 27.4463 109.281 27.4463C108.212 27.4463 107.381 26.5769 107.381 25.5285V18.8446C107.381 17.3769 106.193 16.1777 104.739 16.1777C103.285 16.1777 102.097 17.3769 102.097 18.8446V25.5285C102.097 26.5769 101.236 27.4463 100.197 27.4463C99.1281 27.4463 98.2668 26.5769 98.2668 25.5285V14.2906C98.2668 13.2704 99.0698 12.4624 100.078 12.4624C100.643 12.4624 101.177 12.7616 101.504 13.1809C102.454 12.6414 103.553 12.3115 104.741 12.3115C108.3 12.3115 111.18 15.2495 111.18 18.8446Z"
                fill="#3B3A3C"
              />
              <path
                d="M119.734 27.6893C116.17 27.6893 113.26 24.7513 113.26 21.1537V14.4084C113.26 13.3293 114.121 12.46 115.16 12.46C116.229 12.46 117.09 13.3293 117.09 14.4084V21.1537C117.09 22.6214 118.278 23.8206 119.732 23.8206C121.186 23.8206 122.374 22.6214 122.374 21.1537V14.4084C122.374 13.3293 123.235 12.46 124.274 12.46C125.343 12.46 126.204 13.3293 126.204 14.4084V21.1537C126.209 24.7513 123.298 27.6893 119.734 27.6893Z"
                fill="#3B3A3C"
              />
              <path
                d="M136.663 25.5006C136.663 26.5797 135.802 27.449 134.733 27.449H134.049C130.872 27.449 128.289 24.8409 128.289 21.6345V9.64226C128.289 8.56322 129.15 7.69385 130.219 7.69385C131.257 7.69385 132.119 8.56322 132.119 9.64226V12.4601H134.968C135.888 12.4601 136.602 13.2092 136.602 14.1093C136.602 15.0094 135.89 15.7586 134.968 15.7586H132.119V21.6345C132.119 22.7135 132.98 23.5829 134.049 23.5829H134.733C135.802 23.5829 136.663 24.4523 136.663 25.5006Z"
                fill="#3B3A3C"
              />
              <path
                d="M143.877 15.9373C143.165 15.8171 142.539 15.6381 141.888 16.0268C141.354 16.326 141.296 17.1058 141.83 17.4664C142.306 17.7655 142.603 17.7962 143.076 17.8857C144.918 18.2744 146.372 19.5938 146.848 21.422C147.324 23.2809 146.671 25.3188 145.186 26.5181C143.821 27.6585 141.8 27.8963 140.049 27.4769C139.338 27.2979 138.416 26.9374 137.942 26.3391C137.466 25.7407 137.438 24.6898 137.853 24.0915C138.537 22.9818 139.753 23.1914 140.852 23.552C141.564 23.7923 142.752 23.8818 143.048 23.0431C143.345 22.2326 142.722 21.6342 141.326 21.2456C139.692 20.7956 138.058 19.3278 137.792 17.4382C137.316 14.1704 140.88 11.593 144.414 12.5519C144.948 12.7027 145.544 12.9712 145.929 13.3624C146.433 13.8431 146.64 14.531 146.225 15.3108C145.69 16.239 144.738 16.0882 143.877 15.9373Z"
                fill="#3B3A3C"
              />
              <path
                d="M52.3302 37.503C52.3302 38.6818 51.3879 39.6407 50.2126 39.6407C49.5667 39.6407 48.9891 39.3492 48.599 38.8889V39.3313C48.599 39.4745 48.4825 39.5895 48.3432 39.5895C48.2014 39.5895 48.095 39.4719 48.095 39.3313V34.3784C48.095 34.2199 48.2191 34.0869 48.3761 34.0869C48.5408 34.0869 48.6649 34.2199 48.6649 34.3784V36.0328C49.055 35.616 49.5996 35.3552 50.2126 35.3552C51.3879 35.3577 52.3302 36.3166 52.3302 37.503ZM51.7603 37.503C51.7603 36.6413 51.0662 35.9407 50.2126 35.9407C49.3615 35.9407 48.6649 36.6413 48.6649 37.503C48.6649 38.3647 49.359 39.0577 50.2126 39.0577C51.0637 39.0577 51.7603 38.3647 51.7603 37.503Z"
                fill="black"
              />
              <path
                d="M56.8314 37.3623C56.8238 37.5054 56.7478 37.6128 56.6161 37.664C56.4743 37.7151 56.3096 37.7049 56.1602 37.7049H54.4225C54.0426 37.7049 53.6702 37.7049 53.2978 37.7049C53.3384 38.0475 53.4878 38.3646 53.7361 38.6152C54.0248 38.9067 54.4149 39.0652 54.8202 39.0652C55.0355 39.0652 55.2508 39.0243 55.4408 38.9399C55.6308 38.8479 55.8056 38.7302 55.9449 38.5717C56.0513 38.4541 56.2336 38.4541 56.3502 38.564C56.4667 38.674 56.4743 38.8555 56.3679 38.9732C56.1703 39.1828 55.9373 39.349 55.6814 39.4667C55.4079 39.5919 55.1191 39.6508 54.8202 39.6508C54.2579 39.6508 53.7285 39.4257 53.3308 39.0243C53.0496 38.7405 52.8495 38.3799 52.7608 37.9964C52.6038 37.2856 52.8014 36.5006 53.3156 35.984C53.7057 35.5903 54.2173 35.3755 54.7645 35.3755C55.4839 35.3755 56.1551 35.7769 56.5275 36.3957C56.644 36.5798 56.725 36.7793 56.7757 36.9889C56.7985 37.0938 56.8314 37.2267 56.8314 37.3623ZM56.221 37.2114C56.1804 36.9608 56.0893 36.7435 55.9474 36.5517C55.6738 36.1579 55.2432 35.9073 54.7645 35.9073C54.2832 35.9073 53.8551 36.1579 53.5815 36.5517C53.4397 36.7435 53.351 36.9685 53.308 37.2114H56.221Z"
                fill="black"
              />
              <path
                d="M59.3063 35.915C59.1569 36.1656 58.901 35.9483 58.6452 35.915C58.364 35.8562 58.0069 35.9329 57.827 36.1656C57.6522 36.3983 57.6953 36.7179 57.9182 36.8918C58.1487 37.058 58.44 37.0913 58.6959 37.2012C59.1011 37.3776 59.4254 37.7279 59.4912 38.1856C59.5647 38.6868 59.3088 39.2135 58.8529 39.4641C58.2399 39.7991 57.5611 39.5817 57.2976 39.3976C57.1659 39.3056 57.1228 39.1317 57.2064 38.9962C57.3128 38.83 57.4952 38.8556 57.6446 38.9297C57.9182 39.0806 58.2906 39.1292 58.5717 38.9706C58.8377 38.8274 58.9947 38.5436 58.9441 38.2444C58.8782 37.8021 58.4653 37.6845 58.1006 37.5592C57.7358 37.4262 57.4065 37.2421 57.2571 36.8662C57.1406 36.5568 57.1912 36.2142 57.3635 35.9381C57.7434 35.3627 58.5869 35.2272 59.167 35.5545C59.3063 35.6312 59.3899 35.7744 59.3063 35.915Z"
                fill="black"
              />
              <path
                d="M62.1938 39.2825C62.1938 39.4487 62.062 39.5843 61.8949 39.5843H61.5149C60.7778 39.5843 60.1648 38.9655 60.1648 38.2214V34.3629C60.1648 34.2121 60.2965 34.0791 60.4637 34.0791C60.6131 34.0791 60.7449 34.2121 60.7449 34.3629V35.4062H61.9455C62.0772 35.4062 62.1938 35.5238 62.1938 35.6568C62.1938 35.8076 62.0772 35.9252 61.9455 35.9252H60.7449V38.2214C60.7449 38.6561 61.0919 38.9987 61.5149 38.9987H61.8949C62.062 38.9987 62.1938 39.1317 62.1938 39.2825Z"
                fill="black"
              />
              <path
                d="M66.9533 39.2825C66.9533 39.4487 66.8216 39.5843 66.6544 39.5843H66.2744C65.5373 39.5843 64.9243 38.9655 64.9243 38.2214V34.3629C64.9243 34.2121 65.056 34.0791 65.2232 34.0791C65.3727 34.0791 65.5044 34.2121 65.5044 34.3629V35.4062H66.7051C66.8368 35.4062 66.9533 35.5238 66.9533 35.6568C66.9533 35.8076 66.8368 35.9252 66.7051 35.9252H65.5044V38.2214C65.5044 38.6561 65.8514 38.9987 66.2744 38.9987H66.6544C66.8216 38.9987 66.9533 39.1317 66.9533 39.2825Z"
                fill="black"
              />
              <path
                d="M70.9581 37.1272V39.2904C70.9581 39.449 70.8264 39.5819 70.6694 39.5819C70.5123 39.5819 70.3806 39.449 70.3806 39.2904V37.1272C70.3806 36.4675 69.8436 35.9255 69.1901 35.9255C68.5289 35.9255 67.9995 36.4675 67.9995 37.1272V39.2904C67.9995 39.449 67.8678 39.5819 67.7108 39.5819C67.5461 39.5819 67.4119 39.449 67.4119 39.2904V34.312C67.4119 34.1535 67.5436 34.0205 67.7108 34.0205C67.8678 34.0205 67.9995 34.1535 67.9995 34.312V35.8078C68.3136 35.5163 68.7265 35.3399 69.1901 35.3399C70.1653 35.3399 70.9581 36.1428 70.9581 37.1272Z"
                fill="black"
              />
              <path
                d="M71.9865 34.5036C71.9865 34.6698 71.87 34.7874 71.6978 34.7874C71.5483 34.7874 71.4166 34.6698 71.4166 34.5036C71.4166 34.3527 71.5483 34.2197 71.6978 34.2197C71.87 34.2197 71.9865 34.3552 71.9865 34.5036ZM71.713 39.5843C71.5483 39.5843 71.4141 39.4513 71.4141 39.2825V35.6644C71.4141 35.488 71.5458 35.355 71.7206 35.355C71.87 35.355 72.0017 35.488 72.0017 35.6644V39.2825C72.0017 39.4487 71.87 39.5843 71.713 39.5843Z"
                fill="black"
              />
              <path
                d="M76.0649 37.0864V39.2905C76.0649 39.449 75.9332 39.582 75.7761 39.582C75.6191 39.582 75.4949 39.449 75.4949 39.2905V37.0864C75.4949 36.4523 74.9731 35.9255 74.3449 35.9255C73.7066 35.9255 73.1949 36.4523 73.1949 37.0864V39.2905C73.1949 39.449 73.0708 39.582 72.9138 39.582C72.7491 39.582 72.625 39.449 72.625 39.2905V35.6647C72.625 35.5241 72.7415 35.4065 72.8808 35.4065C73.0227 35.4065 73.1291 35.5241 73.1291 35.6647V35.8565C73.4432 35.5394 73.8738 35.3477 74.3449 35.3477C75.2948 35.3477 76.0649 36.125 76.0649 37.0864Z"
                fill="black"
              />
              <path
                d="M80.8067 35.6492V39.2239C80.8067 40.3182 79.9302 41.2029 78.8461 41.2029C78.5725 41.2029 78.299 41.1518 78.0431 41.0367C77.919 40.9779 77.8607 40.8194 77.919 40.6941C77.9773 40.5611 78.1267 40.5023 78.2584 40.5612C78.4408 40.6455 78.6384 40.6864 78.8461 40.6864C79.6491 40.6864 80.295 40.0344 80.295 39.2239V38.9145C79.9049 39.3747 79.3274 39.6585 78.689 39.6585C77.5137 39.6585 76.5613 38.6971 76.5613 37.5209C76.5613 36.3345 77.5137 35.373 78.689 35.373C79.3274 35.373 79.9049 35.6569 80.295 36.1171V35.6492C80.295 35.506 80.4115 35.3909 80.5508 35.3909C80.6902 35.3909 80.8067 35.506 80.8067 35.6492ZM80.2291 37.5209C80.2291 36.6592 79.5351 35.9586 78.689 35.9586C77.8379 35.9586 77.1414 36.6592 77.1414 37.5209C77.1414 38.3724 77.8354 39.0755 78.689 39.0755C79.5326 39.073 80.2291 38.3724 80.2291 37.5209Z"
                fill="black"
              />
              <path
                d="M83.4054 35.915C83.256 36.1656 83.0002 35.9483 82.7443 35.915C82.4632 35.8562 82.106 35.9329 81.9261 36.1656C81.7514 36.3983 81.7944 36.7179 82.0173 36.8918C82.2478 37.058 82.5391 37.0913 82.795 37.2012C83.2003 37.3776 83.5245 37.7279 83.5904 38.1856C83.6638 38.6868 83.408 39.2135 82.952 39.4641C82.339 39.7991 81.6602 39.5817 81.3967 39.3976C81.265 39.3056 81.222 39.1317 81.3056 38.9962C81.4119 38.83 81.5943 38.8556 81.7438 38.9297C82.0173 39.0806 82.3897 39.1292 82.6709 38.9706C82.9343 38.8274 83.0939 38.5436 83.0432 38.2444C82.9774 37.8021 82.5645 37.6845 82.1997 37.5592C81.835 37.4262 81.5057 37.2421 81.3562 36.8662C81.2397 36.5568 81.2904 36.2142 81.4626 35.9381C81.8426 35.3627 82.6861 35.2272 83.2661 35.5545C83.4054 35.6312 83.489 35.7744 83.4054 35.915Z"
                fill="black"
              />
              <path
                d="M87.114 34.5036C87.114 34.6698 86.9975 34.7874 86.8252 34.7874C86.6758 34.7874 86.544 34.6698 86.544 34.5036C86.544 34.3527 86.6758 34.2197 86.8252 34.2197C86.9975 34.2197 87.114 34.3552 87.114 34.5036ZM86.8404 39.5843C86.6758 39.5843 86.5415 39.4513 86.5415 39.2825V35.6644C86.5415 35.488 86.6732 35.355 86.848 35.355C86.9975 35.355 87.1292 35.488 87.1292 35.6644V39.2825C87.1292 39.4487 86.9975 39.5843 86.8404 39.5843Z"
                fill="black"
              />
              <path
                d="M91.1921 37.0864V39.2905C91.1921 39.449 91.0603 39.582 90.9033 39.582C90.7463 39.582 90.6221 39.449 90.6221 39.2905V37.0864C90.6221 36.4523 90.1003 35.9255 89.4721 35.9255C88.8338 35.9255 88.3221 36.4523 88.3221 37.0864V39.2905C88.3221 39.449 88.198 39.582 88.041 39.582C87.8763 39.582 87.7522 39.449 87.7522 39.2905V35.6647C87.7522 35.5241 87.8687 35.4065 88.008 35.4065C88.1474 35.4065 88.2563 35.5241 88.2563 35.6647V35.8565C88.5704 35.5394 89.001 35.3477 89.4721 35.3477C90.4246 35.3477 91.1921 36.125 91.1921 37.0864Z"
                fill="black"
              />
              <path
                d="M94.3458 39.5844C94.1811 39.5844 94.0469 39.4514 94.0469 39.2929V34.3144C94.0469 34.1559 94.1786 34.0229 94.3458 34.0229C94.5028 34.0229 94.6345 34.1559 94.6345 34.3144V39.2929C94.6371 39.4489 94.5028 39.5844 94.3458 39.5844Z"
                fill="black"
              />
              <path
                d="M95.787 34.5036C95.787 34.6698 95.6705 34.7874 95.4983 34.7874C95.3488 34.7874 95.2171 34.6698 95.2171 34.5036C95.2171 34.3527 95.3488 34.2197 95.4983 34.2197C95.6705 34.2197 95.787 34.3552 95.787 34.5036ZM95.5135 39.5843C95.3488 39.5843 95.2146 39.4513 95.2146 39.2825V35.6644C95.2146 35.488 95.3463 35.355 95.5211 35.355C95.6705 35.355 95.8022 35.488 95.8022 35.6644V39.2825C95.8022 39.4487 95.6705 39.5843 95.5135 39.5843Z"
                fill="black"
              />
              <path
                d="M98.31 36.401C98.31 36.5441 98.1935 36.6592 98.0541 36.6592H96.8712V39.2903C96.8712 39.4489 96.7471 39.5818 96.5824 39.5818C96.4254 39.5818 96.3013 39.4489 96.3013 39.2903V35.4395C96.3013 34.6878 96.9041 34.0767 97.6489 34.0767H98.0212C98.1783 34.0767 98.31 34.2096 98.31 34.3682C98.31 34.5267 98.1783 34.652 98.0212 34.652H97.6489C97.2182 34.652 96.8712 35.01 96.8712 35.437V36.1478H98.0541C98.196 36.1504 98.31 36.2578 98.31 36.401Z"
                fill="black"
              />
              <path
                d="M102.814 37.3623C102.806 37.5054 102.73 37.6128 102.598 37.664C102.456 37.7151 102.292 37.7049 102.142 37.7049H100.405C100.025 37.7049 99.6524 37.7049 99.28 37.7049C99.3205 38.0475 99.47 38.3646 99.7182 38.6152C100.007 38.9067 100.397 39.0652 100.802 39.0652C101.018 39.0652 101.233 39.0243 101.423 38.9399C101.613 38.8479 101.788 38.7302 101.927 38.5717C102.033 38.4541 102.216 38.4541 102.332 38.564C102.449 38.6714 102.456 38.8555 102.35 38.9732C102.152 39.1828 101.919 39.349 101.664 39.4667C101.39 39.5919 101.101 39.6508 100.802 39.6508C100.24 39.6508 99.7106 39.4257 99.3129 39.0243C99.0318 38.7405 98.8342 38.3799 98.743 37.9964C98.586 37.2856 98.7835 36.5006 99.2977 35.984C99.6878 35.5903 100.2 35.3755 100.747 35.3755C101.466 35.3755 102.137 35.7769 102.51 36.3957C102.626 36.5798 102.707 36.7793 102.758 36.9889C102.778 37.0938 102.814 37.2267 102.814 37.3623ZM102.201 37.2114C102.16 36.9608 102.069 36.7435 101.927 36.5517C101.653 36.1579 101.223 35.9073 100.744 35.9073C100.263 35.9073 99.8347 36.1579 99.5612 36.5517C99.4193 36.7435 99.3281 36.9685 99.2876 37.2114H102.201Z"
                fill="black"
              />
              <path
                d="M109.79 35.6568V39.3235C109.79 39.4667 109.683 39.5818 109.541 39.5818C109.402 39.5818 109.285 39.4642 109.285 39.3235V38.8965C108.895 39.3568 108.318 39.6483 107.672 39.6483C106.497 39.6483 105.544 38.6869 105.544 37.5004C105.544 36.3217 106.497 35.3628 107.672 35.3628C108.318 35.3628 108.895 35.6543 109.285 36.1145V35.6543C109.285 35.5111 109.402 35.4037 109.541 35.4037C109.681 35.4063 109.79 35.5162 109.79 35.6568ZM109.217 37.503C109.217 36.6413 108.521 35.9483 107.669 35.9483C106.816 35.9483 106.122 36.6413 106.122 37.503C106.122 38.3724 106.816 39.0653 107.669 39.0653C108.523 39.0653 109.217 38.3724 109.217 37.503Z"
                fill="black"
              />
              <path
                d="M112.769 35.9665C112.685 36.0994 112.503 36.1506 112.371 36.0662C112.222 35.9818 112.064 35.9332 111.9 35.9332C111.421 35.9332 111.031 36.3347 111.031 36.8179V39.2829C111.031 39.4491 110.899 39.5846 110.75 39.5846C110.585 39.5846 110.451 39.4516 110.451 39.2829V35.675C110.451 35.5241 110.567 35.4065 110.714 35.4065C110.846 35.4065 110.963 35.5241 110.963 35.675V35.7082C111.203 35.4909 111.55 35.3579 111.897 35.3579C112.171 35.3579 112.434 35.4423 112.667 35.5753C112.802 35.6571 112.852 35.8412 112.769 35.9665Z"
                fill="black"
              />
              <path
                d="M117.313 37.3623C117.305 37.5054 117.229 37.6128 117.098 37.664C116.956 37.7151 116.791 37.7049 116.642 37.7049H114.904C114.524 37.7049 114.152 37.7049 113.779 37.7049C113.82 38.0475 113.969 38.3646 114.218 38.6152C114.506 38.9067 114.896 39.0652 115.302 39.0652C115.517 39.0652 115.732 39.0243 115.922 38.9399C116.112 38.8479 116.287 38.7302 116.426 38.5717C116.533 38.4541 116.715 38.4541 116.832 38.564C116.948 38.6714 116.956 38.8555 116.849 38.9732C116.652 39.1828 116.419 39.349 116.163 39.4667C115.889 39.5919 115.601 39.6508 115.302 39.6508C114.739 39.6508 114.21 39.4257 113.812 39.0243C113.531 38.7405 113.333 38.3799 113.242 37.9964C113.085 37.2856 113.283 36.5006 113.797 35.984C114.187 35.5903 114.699 35.3755 115.246 35.3755C115.965 35.3755 116.637 35.7769 117.009 36.3957C117.125 36.5798 117.206 36.7793 117.257 36.9889C117.28 37.0938 117.313 37.2267 117.313 37.3623ZM116.7 37.2114C116.659 36.9608 116.568 36.7435 116.426 36.5517C116.153 36.1579 115.722 35.9073 115.243 35.9073C114.765 35.9073 114.334 36.1579 114.06 36.5517C113.921 36.7435 113.83 36.9685 113.787 37.2114H116.7Z"
                fill="black"
              />
              <path
                d="M122.012 36.401C122.012 36.5441 121.895 36.6592 121.756 36.6592H120.573V39.2903C120.573 39.4489 120.449 39.5818 120.284 39.5818C120.127 39.5818 120.003 39.4489 120.003 39.2903V35.4395C120.003 34.6878 120.606 34.0767 121.351 34.0767H121.723C121.88 34.0767 122.012 34.2096 122.012 34.3682C122.012 34.5267 121.88 34.652 121.723 34.652H121.351C120.92 34.652 120.573 35.01 120.573 35.437V36.1478H121.756C121.898 36.1504 122.012 36.2578 122.012 36.401Z"
                fill="black"
              />
              <path
                d="M126.622 37.5107C126.622 38.6894 125.669 39.6483 124.504 39.6483C123.339 39.6483 122.386 38.6869 122.386 37.5107C122.386 36.3345 123.339 35.373 124.504 35.373C125.669 35.373 126.622 36.3345 126.622 37.5107ZM122.956 37.5107C122.956 38.3698 123.65 39.073 124.504 39.073C125.358 39.073 126.044 38.3724 126.044 37.5107C126.044 36.649 125.358 35.956 124.504 35.956C123.65 35.956 122.956 36.6515 122.956 37.5107Z"
                fill="black"
              />
              <path
                d="M129.52 35.9665C129.436 36.0994 129.254 36.1506 129.122 36.0662C128.972 35.9818 128.815 35.9332 128.651 35.9332C128.172 35.9332 127.782 36.3347 127.782 36.8179V39.2829C127.782 39.4491 127.65 39.5846 127.501 39.5846C127.336 39.5846 127.202 39.4516 127.202 39.2829V35.675C127.202 35.5241 127.318 35.4065 127.465 35.4065C127.597 35.4065 127.714 35.5241 127.714 35.675V35.7082C127.954 35.4909 128.301 35.3579 128.648 35.3579C128.922 35.3579 129.185 35.4423 129.418 35.5753C129.553 35.6571 129.601 35.8412 129.52 35.9665Z"
                fill="black"
              />
              <path
                d="M134.178 36.401C134.178 36.5441 134.061 36.6592 133.922 36.6592H132.739V39.2903C132.739 39.4489 132.615 39.5818 132.45 39.5818C132.293 39.5818 132.169 39.4489 132.169 39.2903V35.4395C132.169 34.6878 132.772 34.0767 133.517 34.0767H133.889C134.046 34.0767 134.178 34.2096 134.178 34.3682C134.178 34.5267 134.046 34.652 133.889 34.652H133.517C133.086 34.652 132.739 35.01 132.739 35.437V36.1478H133.922C134.061 36.1504 134.178 36.2578 134.178 36.401Z"
                fill="black"
              />
              <path
                d="M136.992 35.9665C136.908 36.0994 136.729 36.1506 136.594 36.0662C136.445 35.9818 136.288 35.9332 136.123 35.9332C135.642 35.9332 135.254 36.3347 135.254 36.8179V39.2829C135.254 39.4491 135.123 39.5846 134.973 39.5846C134.809 39.5846 134.674 39.4516 134.674 39.2829V35.675C134.674 35.5241 134.791 35.4065 134.94 35.4065C135.072 35.4065 135.189 35.5241 135.189 35.675V35.7082C135.429 35.4909 135.776 35.3579 136.123 35.3579C136.397 35.3579 136.66 35.4423 136.893 35.5753C137.025 35.6571 137.076 35.8412 136.992 35.9665Z"
                fill="black"
              />
              <path
                d="M141.536 37.3623C141.529 37.5054 141.453 37.6128 141.321 37.664C141.179 37.7151 141.014 37.7049 140.865 37.7049H139.127C138.747 37.7049 138.375 37.7049 138.003 37.7049C138.043 38.0475 138.193 38.3646 138.441 38.6152C138.73 38.9067 139.12 39.0652 139.525 39.0652C139.74 39.0652 139.956 39.0243 140.146 38.9399C140.336 38.8479 140.51 38.7302 140.65 38.5717C140.756 38.4541 140.938 38.4541 141.055 38.564C141.171 38.6714 141.179 38.8555 141.073 38.9732C140.875 39.1828 140.642 39.349 140.386 39.4667C140.113 39.5919 139.824 39.6508 139.525 39.6508C138.963 39.6508 138.433 39.4257 138.036 39.0243C137.754 38.7405 137.557 38.3799 137.466 37.9964C137.309 37.2856 137.506 36.5006 138.02 35.984C138.41 35.5903 138.922 35.3755 139.469 35.3755C140.189 35.3755 140.86 35.7769 141.232 36.3957C141.349 36.5798 141.43 36.7793 141.481 36.9889C141.503 37.0938 141.536 37.2267 141.536 37.3623ZM140.923 37.2114C140.883 36.9608 140.792 36.7435 140.65 36.5517C140.376 36.1579 139.946 35.9073 139.467 35.9073C138.985 35.9073 138.557 36.1579 138.284 36.5517C138.142 36.7435 138.051 36.9685 138.01 37.2114H140.923Z"
                fill="black"
              />
              <path
                d="M146.121 37.3623C146.114 37.5054 146.038 37.6128 145.906 37.664C145.764 37.7151 145.599 37.7049 145.45 37.7049H143.712C143.332 37.7049 142.96 37.7049 142.588 37.7049C142.628 38.0475 142.778 38.3646 143.026 38.6152C143.315 38.9067 143.705 39.0652 144.11 39.0652C144.325 39.0652 144.541 39.0243 144.731 38.9399C144.921 38.8479 145.095 38.7302 145.235 38.5717C145.341 38.4541 145.523 38.4541 145.64 38.564C145.756 38.6714 145.764 38.8555 145.658 38.9732C145.46 39.1828 145.227 39.349 144.971 39.4667C144.698 39.5919 144.409 39.6508 144.11 39.6508C143.548 39.6508 143.018 39.4257 142.621 39.0243C142.339 38.7405 142.142 38.3799 142.051 37.9964C141.894 37.2856 142.091 36.5006 142.605 35.984C142.995 35.5903 143.507 35.3755 144.054 35.3755C144.774 35.3755 145.445 35.7769 145.817 36.3957C145.934 36.5798 146.015 36.7793 146.066 36.9889C146.088 37.0938 146.121 37.2267 146.121 37.3623ZM145.508 37.2114C145.468 36.9608 145.377 36.7435 145.235 36.5517C144.961 36.1579 144.53 35.9073 144.052 35.9073C143.573 35.9073 143.142 36.1579 142.869 36.5517C142.729 36.7435 142.638 36.9685 142.595 37.2114H145.508Z"
                fill="black"
              />
            </svg>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link " exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bundles">
                  Bundles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/items">
                  Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tickets">
                  Tickets
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/draws">
                  Draws
                </NavLink>
              </li>
            </ul>
            <div className="d-md-flex align-items-center">
              <div className="account-section">
                <NavLink
                  to={localStorage.getItem("fname") ? "/account" : "/signin"}
                  className="text-decoration-none nav-link ps-0 ps-md-2"
                >
                  <span className="user-icon">
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7522 20.3157V20.4657H15.9022H16.8889H16.8981H17.0481V20.3157V15.886C17.0481 13.9076 15.4214 12.2948 13.4308 12.2948H4.52283C2.5322 12.2948 0.905542 13.9076 0.905542 15.886V20.3157V20.4657H1.05554H2.05147H2.20147V20.3157V15.886C2.20147 14.6154 3.23982 13.5833 4.52283 13.5833H13.4308C14.7138 13.5833 15.7522 14.6154 15.7522 15.886V20.3157Z"
                        fill="#364456"
                      />
                      <path
                        d="M3.38625 6.08411C3.38625 9.14247 5.89818 11.6339 8.97695 11.6339C12.0557 11.6339 14.5676 9.14247 14.5676 6.08411C14.5676 3.02574 12.0557 0.534326 8.97695 0.534326C5.89818 0.534326 3.38625 3.02574 3.38625 6.08411ZM4.67296 6.07496C4.67296 3.72439 6.6058 1.80446 8.97695 1.80446C11.3481 1.80446 13.2809 3.72439 13.2809 6.07496C13.2809 8.42553 11.3481 10.3455 8.97695 10.3455C6.6058 10.3455 4.67296 8.42553 4.67296 6.07496Z"
                        fill="#364456"
                      />
                    </svg>
                  </span>
                  <span>
                    {localStorage.getItem("fname")
                      ? localStorage.getItem("fname")
                      : `login / sign up`}
                  </span>
                </NavLink>
              </div>
              <div className="cart-section">
               
                <NavLink
                  to="/cart"
                  className="text-decoration-none nav-link ps-0 ps-md-2"
                >
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.64 13.42H5.37C3.35 13.42 1.41 11.8 1.06 9.81L0.0100007 3.85C-0.0199993 3.69 0.0300007 3.53 0.130001 3.41C0.230001 3.29 0.380001 3.22 0.540001 3.22H18.25V4.29H1.18L2.12 9.61C2.38 11.09 3.87 12.34 5.37 12.34H16.64V13.42Z"
                      fill="#3269AC"
                    />
                    <path
                      d="M13.42 16.64H1.07V15.57H13.41C15.14 15.57 15.83 14.05 16.11 12.77L18.25 0.45C18.3 0.19 18.52 0 18.78 0H21.46V1.07H19.23L17.16 12.97C16.66 15.31 15.3 16.64 13.42 16.64Z"
                      fill="#3269AC"
                    />
                    <path
                      d="M12.48 20.39C11.3 20.39 10.33 19.43 10.33 18.24C10.33 17.06 11.29 16.09 12.48 16.09C13.66 16.09 14.63 17.05 14.63 18.24C14.62 19.43 13.66 20.39 12.48 20.39ZM12.48 17.17C11.89 17.17 11.41 17.65 11.41 18.24C11.41 18.83 11.89 19.31 12.48 19.31C13.07 19.31 13.55 18.83 13.55 18.24C13.55 17.65 13.07 17.17 12.48 17.17Z"
                      fill="#3269AC"
                    />
                    <path
                      d="M3.89 20.39C2.71 20.39 1.74 19.43 1.74 18.24C1.74 17.06 2.7 16.09 3.89 16.09C5.07 16.09 6.04 17.05 6.04 18.24C6.04 19.43 5.07 20.39 3.89 20.39ZM3.89 17.17C3.3 17.17 2.82 17.65 2.82 18.24C2.82 18.83 3.3 19.31 3.89 19.31C4.48 19.31 4.96 18.83 4.96 18.24C4.96 17.65 4.48 17.17 3.89 17.17Z"
                      fill="#3269AC"
                    />
                  </svg>

                  <span>Cart</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
