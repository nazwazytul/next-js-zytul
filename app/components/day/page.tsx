import Image from "next/image";

const Day = () => {
    return (
        <div className="flex justify-between items-end ">
        <div>
        <Image
        className=""
        src="/img/homepage/facewash.png"
        alt=""
        width={70}
        height={0}
        />
        </div>
        <div>
        <Image
        className=""
        src="/img/homepage/toner.png"
        alt=""
        width={70}
        height={140}
        />
        </div>
        <div>
        <Image
        className=""
        src="/img/homepage/krim.png"
        alt=""
        width={100}
        height={180}
        />
        </div>
        <div>
        <Image
        className=""
        src="/img/homepage/sunscreen.png"
        alt=""
        width={100}
        height={200}
        />
        </div>
        </div>

    );
};

export default Day;