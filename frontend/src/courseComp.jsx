export function Course({name,source}){
 
    return (
        <div className="block">
        <div className="">
            <img className="w-56" src={source} alt="course" />
        </div>
        <div className="p-3">
            {name}
        </div>
        <div className="flex gap-8">
        <button className="bg-black text-white rounded p-2 dark:text-black dark:bg-white">View Course</button>
        <button className="text-black dark:text-white">Join Discord</button>
        </div>
        </div>
    )

}