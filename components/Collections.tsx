import { getCollections } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 bg-orange-200">
      <p className="text-heading1-bold text-white">Collections</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={350}
                  height={200}
                  className="rounded-lg cursor-pointer transform transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-1 hover:shadow-2xl"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
