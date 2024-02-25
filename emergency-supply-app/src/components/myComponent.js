import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-stone-50">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-6 pt-5 pb-8 mx-auto w-full text-sm text-black whitespace-nowrap bg-stone-200 max-md:px-5">
            <div className="flex gap-3 justify-between self-stretch text-xl font-bold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ce7246242ebc7407c6a2566da1d477093102392e81f19435563b7f91ed366c?"
                className="w-1 aspect-[0.17] stroke-[4px] stroke-amber-300"
              />
              <div className="grow self-start mt-2">CRUD OPERATIONS</div>
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="mt-14 w-32 max-w-full aspect-square max-md:mt-10"
            />
            <div className="mt-14 text-yellow-500 max-md:mt-10">Admin</div>
            <div className="flex gap-4 mt-24 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55596f6e5d94730c9efd668c3a0f711f9f1dc5e2838ce6143f6c88f781c4f34a?"
                className="aspect-[1.12] w-[19px]"
              />
              <div className="self-start mt-1.5">Home</div>
            </div>
            <div className="flex gap-5 mt-11 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f91361d9e8a5dfeea5034f7bc9af9fda0141d86dae491b208f35e059cbd0ac29?"
                className="w-3 aspect-[0.8]"
              />
              <div>Course</div>
            </div>
            <div className="flex gap-4 px-10 py-3.5 mt-8 bg-yellow-500 rounded max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5187c12a90129af4b4079aff9b3a4f075fb20173dcf16c4a55352add38950d?"
                className="w-5 aspect-[1.25]"
              />
              <div className="self-start mt-1.5">Students</div>
            </div>
            <div className="flex gap-4 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c368a736cb015546c9afc48640544d8a8293a0529920bfc76fae2d5184402125?"
                className="aspect-[0.88] w-[15px]"
              />
              <div>Payment</div>
            </div>
            <div className="flex gap-5 mt-11 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/377e1b210686517e0651182c3ba3cd788fadcf7f709a8fe0464ce8ee1c06112f?"
                className="aspect-[0.76] w-[13px]"
              />
              <div>Report</div>
            </div>
            <div className="flex gap-4 mt-11 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0654f80887e4d1ffcb2550df17bf76cdd55db4a995ce12a1345ac0975a61c9e1?"
                className="aspect-[0.88] w-[15px]"
              />
              <div>Settings</div>
            </div>
            <div className="flex gap-5 justify-between mt-36 max-md:mt-10">
              <div className="my-auto">Logout</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d29c7e6a69b1591702ec9871eaa5dd0a967238b4f547f12d5a69e561708949e2?"
                className="aspect-square w-[17px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-5 justify-between px-10 py-3 w-full text-sm whitespace-nowrap bg-white text-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed0e5df16e8554289e0857d7b7db4177fe0c3f06f4d26873e9683882586daaf0?"
                className="my-auto aspect-square w-[18px]"
              />
              <div className="flex gap-5 justify-between">
                <div className="flex gap-5 justify-between px-3.5 py-3 bg-white rounded-lg border border-solid border-neutral-200">
                  <div className="my-auto">Search...</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1866d03e882b15626860501dbee3e1e62a377d21f152529e0e0fd4d426055222?"
                    className="w-3.5 aspect-square"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f7fd902b0c8f6a726c0b586c84e773bd095c191b9a0ae53020e53ffebed209?"
                  className="my-auto aspect-[0.85] w-[17px]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between mx-8 mt-3 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex-auto my-auto text-2xl font-bold text-black">
                Students List
              </div>
              <div className="flex gap-5 justify-between text-sm text-white whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd6be9c618dda9264106878ed46defee0c59fa7a758392a69c0ac80c6b5b89f?"
                  className="my-auto w-3.5 aspect-[0.64]"
                />
                <div className="grow justify-center px-7 py-4 bg-yellow-500 rounded max-md:px-5">
                  ADD NEW STUDENT
                </div>
              </div>
            </div>
            <div className="mx-8 mt-3 max-w-full h-px bg-neutral-200 w-[1110px] max-md:mr-2.5" />
            <div className="flex gap-5 justify-between self-center px-5 mt-6 max-w-full text-xs font-semibold text-neutral-400 w-[800px] max-md:flex-wrap">
              <div className="flex gap-5 justify-between whitespace-nowrap">
                <div>Name</div>
                <div>Email</div>
              </div>
              <div className="flex gap-5 justify-between">
                <div>Phone</div>
                <div>Enroll Number</div>
              </div>
              <div className="flex-auto">Date of admission</div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-6 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd7bf15561d0b1efe1692ad5ba2682ef4670ae4795dd87b8509594050d9bed4?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17414f29099a2864ed143ddb628e09d963a5c8dce1f824e764afdbf8db72c36b?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-2.5 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db552df70779ba7151dcf88613dcaea83718de0842ed41557e2b3e61b32c35f5?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/340ea6f48ce574bbbeb46771ea4fb8419f23c69efec9700414e25afb842a5e91?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-2.5 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5122235eef36643a28ab680e3c3f41e81dbe107dba2d31c95db87519381e60?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6f9c44a05c1963339a8cc40a2b81cb10c07b442073e980c4b07300dc7374c2?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-2.5 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c75c796fb7c9161fa38de4825b5e4eeb1f3c3d3c878563276951b91de666b9?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f38e03c913ae36d7b3dd75983e164547104229f28c1feaf80049a1e0e835f8b?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-2.5 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42427db69bd3a4a11dc9a8ec4fa75bb2240c3ea0def3d0217604093b97030feb?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb238bea4d2c813240725fd295c92c1325ccac3be578913ed970c5b2d5290e75?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-2.5 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa957beef199753ec3719daf4a5b4cafd50bca0857b227a3513cd0eeed57b723?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/98652c5e2c2135f21c675447819be8ccea0f9a77948af38c8ee14e13c28a8d7e?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between px-4 py-4 mx-8 mt-2.5 bg-white rounded-lg max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between items-center text-sm text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-stretch aspect-[1.18] w-[65px]"
                />
                <div className="self-stretch my-auto">Karthi</div>
                <div className="flex-auto self-end mt-7">karthi@gmmail.com</div>
                <div className="self-stretch my-auto">7305477760</div>
                <div className="flex-auto self-stretch my-auto">
                  1234567305477760
                </div>
                <div className="grow self-stretch my-auto">08-Dec, 2021</div>
              </div>
              <div className="flex gap-5 justify-between my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c4b08001e17f4cb630c33bf081c23c00a151978e8a0a8e6b69e5bf74c697492?"
                  className="aspect-square w-[19px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe09ac9ee4d54db98e0d5d990aa7de9fae9be0f1939e990cef1cfca90cc186f?"
                  className="self-start w-4 aspect-[0.88]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
