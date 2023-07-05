import { products } from "@/utils/mock";
import Prod1 from "@/components/ui/prod1";

//const prodcategory = (category:string)=>{
//    return products.filter((prod)=> prod.category === category)
//}

export default function Page({ params }: { params: { slug: string } }) {
  const result = products.filter((prd) => prd.category === params.slug);
  //const result = prodcategory(params.slug)
  return (
    <div className=" mt-16 pb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-center gap-x-2 sm:gap-x-4 gap-y-24">
      {result.length > 0 ? (
        result.map((prod) => (
          <Prod1
            key={prod.id}
            title={prod.name}
            price={prod.price}
            image={prod.image}
            category={prod.category}
            id={prod.id}
            tagline={prod.tagline}
          />
        ))
      ) : (
        <p className="text-3xl">No result found</p>
      )}
    </div>
  );
}
