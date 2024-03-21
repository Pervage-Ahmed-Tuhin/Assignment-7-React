
const Recipe = ({ items, handleWantToCook }) => {


    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = items;
    // console.log(recipe_name);
    return (
        <div className="w-96 p-6 recipe-card-box space-y-4 mb-4">

            <div>
                <img className="w-[100%] rounded-[16px]" src={recipe_image} alt="" />
            </div>
            <div>
                <h1 className="lexend font-semibold text-xl">{recipe_name}</h1>
                <p className="fira-sans font-normal text-sm text-[#878787]">{short_description}</p>
                <div className="divider"></div>

                <h1 className="lexand font-medium text-xl">Ingredients: <span>{ingredients.length}</span></h1>

                <ul className="list-disc pl-11">
                    {
                        ingredients.map((item) => <li className="fira-sans font-normal text-[18px] text-[#878787]" key={item}>{item}</li>)
                    }
                </ul>

                <div className="divider"></div>

                <span className="fira-sans font-normal text-xl text-[#282828CC]"><i className="fa-regular fa-clock pr-3 text-xl"></i>{preparing_time} Minutes</span>
                <span className="pl-6 fira-sans font-normal text-xl text-[#282828CC]"><i className="fa-solid fa-fire text-xl pr-3"></i>{calories} Calories</span>

                <div className="pt-4">
                    <button onClick={()=>handleWantToCook(items)} className="btn bg-[#0BE58A] rounded-full border-none outline-none w-[170px]">Want to Cook</button>
                </div>

            </div>

        </div>
    );
};

export default Recipe;