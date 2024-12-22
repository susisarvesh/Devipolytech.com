// src/Components/Preloader/Preloader.js

const Preloader = () => {
    return (
        <div className="">
            <div className="relative flex justify-center items-center w-[100%] h-[100vh]">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-customGreen"></div>
    <img src="https://ik.imagekit.io/zhf0gkzac/Devipolytech/Devipolytechlogo.png?updatedAt=1728993078421"  className="rounded-full object-contain h-28 w-28"></img>
</div>
        </div>
    );
}

export default Preloader;
