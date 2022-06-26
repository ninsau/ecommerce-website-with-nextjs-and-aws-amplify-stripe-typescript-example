import {
  CheckIcon,
  DuplicateIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { ProductImageComponent } from "./Images";
import { ProductsType } from "../lib/types";
import { Fragment, useState } from "react";
import AddToCartComponent from "./AddToCart";
import { copyText, share } from "../lib";

const ProductComponent = (data: ProductsType) => {
  const [copied, setCopied] = useState(false);

  const toggleCopy = (url: string) => {
    copyText(url);
    setCopied(true);
  };

  const toggleShare = (items: any) => {
    share(items);
  };
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          {data.products.map((product, i: number) => (
            <Fragment key={i}>
              <div className="lg:max-w-lg lg:self-end">
                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {product.title}
                  </h1>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">
                      ${product.price}
                    </p>
                  </div>

                  <div className="mt-4 space-y-6">
                    <p className="text-base text-gray-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center">
                    {product.availability === "In stock" ? (
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <XIcon
                        className="flex-shrink-0 w-5 h-5 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                    <p className="ml-2 text-sm text-gray-500">
                      {product.availability}
                    </p>
                  </div>
                  <div
                    className="mt-6 flex items-center cursor"
                    onClick={() => toggleCopy(product.slug)}
                  >
                    {copied ? (
                      <>
                        <DuplicateIcon
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          aria-hidden="true"
                        />
                        <p className="ml-2 text-sm text-gray-500">Copied!</p>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="ml-2 text-sm text-gray-500">Copy</p>
                      </>
                    )}
                  </div>
                  <div
                    className="mt-6 flex items-center cursor"
                    onClick={() =>
                      toggleShare({
                        title: `${product.title}`,
                        text: `${product.description}`,
                        url: `https://www.flowersghana.com/product/${product.slug}`,
                      })
                    }
                  >
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <p className="ml-2 text-sm text-gray-500">Share</p>
                    </>
                  </div>
                </section>
              </div>

              {/* Product image */}
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <ProductImageComponent
                    src={product.image}
                    alt={`${product.title} image`}
                  />
                </div>
          
              </div>

              {/* Product form */}
              <AddToCartComponent {...product} />
            </Fragment>
          ))}
        </div>
      </div>

     
    </>
  );
};

export default ProductComponent;
