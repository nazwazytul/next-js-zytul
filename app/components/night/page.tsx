import Image from "next/image";

const Night = () => {
    return (
        <div className="flex justify-between items-end mx-20">
        <div>
        <Image
        className=""
        src="/img/homepage/remover.png"
        alt=""
        width={70}
        height={0}
        />
        </div>
        <div>
        <Image
        className=""
        src="/img/homepage/facewash.png"
        alt=""
        width={70}
        height={140}
        />
        </div>
        <div>
        <Image
        className=""
        src="/img/homepage/toner.png"
        alt=""
        width={70}
        height={150}
        />
        </div>
        <div>
        <Image
        className=""
        src="/img/homepage/krim.png"
        alt=""
        width={100}
        height={200}
        />
        </div>
        </div>

    );
};

export default Night;