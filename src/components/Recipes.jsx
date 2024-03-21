import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     fetch('./public/recipes.json')
    //         .then(res => res.json())
    //         .then(data => setRecipes(data))

    // }, [])

    useEffect(() => {
        fetch("./recipes.json")
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data);
            });
    }, []);

    // This is the want to cook function
    const notify = () => {
        toast('The item already Exists on the menu')
    }
    const [wantToCookData, setWantToCookData] = useState([]);
    const handleWantToCook = (cookData) => {
        // console.log(cookData);

        const isExisting = wantToCookData.find((p) => p.recipe_id === cookData.recipe_id)
        if (!isExisting) {
            setCounter(counter + 1);
            setWantToCookData([...wantToCookData, cookData]);

        }
        else {
            notify();

        }

        // console.log(wantToCookData);
    }

    // This is the preparing button
    const [minuteCounter, setMinuteCounter] = useState(0);
    const [caloriCounter, setCaloriCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [prepareFood, setPreparefood] = useState([]);


    const handleRemove = (deletedData) => {
        const updatedArray = wantToCookData.filter(item => item.recipe_id != deletedData.recipe_id);
        setWantToCookData(updatedArray);
        setCounter(counter - 1);
    }

    const handlePreparing = (stuff) => {

        const isExisting = prepareFood.find((p) => p.recipe_id === stuff.recipe_id)
        if (!isExisting) {
            setCounter2(counter2 + 1);
            setMinuteCounter(minuteCounter + stuff.preparing_time);
            setCaloriCounter(caloriCounter + stuff.calories);
            setPreparefood([...prepareFood, stuff]);


        }

        else {
            notify();
        }

        handleRemove(stuff);


    }
    // console.log(minuteCounter);
    // console.log(recipes)
    return (
        <div className="max-w-[1170px] mx-auto mb-[100px]">

            <div className="text-center space-y-6 mb-[50px]">
                <h1 className="lexend font-semibold text-4xl">Our Recipes</h1>
                <p className="lexend font-normal text-base text-[#150B2B99]">
                    At Tuhins Kitchen, our recipes are crafted with passion and precision to delight your taste buds <br /> and inspire your culinary adventures. From savory mains to delectable desserts <br /> each recipe is thoughtfully curated to ensure simplicity without compromising on flavor.</p>
            </div>

            {/* THis is the mother div */}
            <div className="max-w-[1170px] mx-auto grid grid-cols-12 gap-6">

                {/* This is the left portion div */}
                <div className="col-span-8 flex justify-between gap-[2px] flex-wrap">
                    {
                        recipes.map((item) => {
                            return <Recipe key={item.recipe_id} items={item}
                                handleWantToCook={handleWantToCook}
                            >
                            </Recipe>
                        })
                    }
                </div>
                {/* End of the left portion div */}

                {/* This is the right portion div */}
                <div className="col-span-4" >
                    <h1 className="lexand font-semibold text-2xl text-center">Want to Cook: <span>{counter}</span></h1>
                    <div className="divider"></div>
                    {/* this is the first appended portion */}
                    <div>

                        <div className="fira-sans font-medium text-base text-[#878787] flex justify-between items-center mb-6">

                            <p className="pr-16">Name:</p>
                            <p className="pr-16">Time:</p>
                            <p>Calories:</p>

                        </div>

                        <table>



                            {
                                wantToCookData.map((item, idx) => {

                                    return (
                                        <tr className="mb-[12px] table-row-bg fira-sans font-medium text-base text-[#878787] flex items-center p-2 flex-wrap" key={item.recipe_id} >
                                            <span className="pr-4 text-black">{idx + 1}</span>
                                            <td className="">{item.recipe_name}</td>
                                            <td className="pl-4 pr-4">{item.preparing_time} Minutes</td>
                                            <td>{item.calories}Calories</td>
                                            <div className="flex justify-end"> <button onClick={() => handlePreparing(item)} className="btn bg-[#0BE58A] rounded-full border-none outline-none w-[115px] h-[22px] lexand font-medium">Preparing</button></div>
                                        </tr>
                                    )

                                })
                            }



                        </table>

                        <div className="mt-6">
                            <h1 className="lexand font-semibold text-2xl text-center">Currently Cooking: <span>{counter2}</span></h1>
                            <div className="divider"></div>

                            <div className="fira-sans font-medium text-base text-[#878787] flex justify-between items-center mb-6">

                                <p className="pr-16">Name:</p>
                                <p className="pr-16">Time:</p>
                                <p>Calories:</p>

                            </div>
                            <table>



                                {
                                    prepareFood.map((item, idx) => {

                                        return (
                                            <tr className="mb-[12px] table-row-bg fira-sans font-medium text-base text-[#878787] flex items-center p-2 flex-wrap" key={item.recipe_id} >
                                                <span className="pr-4 text-black">{idx + 1}</span>
                                                <td className="">{item.ingredients[idx]}</td>
                                                <td className="pl-4 pr-1">{item.preparing_time} Minutes</td>
                                                <td>{item.calories}Calories</td>

                                            </tr>
                                        )

                                    })
                                }



                            </table>

                            <div className="flex items-center justify-end gap-4">
                                <p className="fira-sans font-medium text-base text-[#878787]">Total Time : {minuteCounter} minutes</p>
                                <p className="fira-sans font-medium text-base text-[#878787]">Total Calories : {caloriCounter} calories</p>
                            </div>

                        </div>

                    </div>
                </div>
                {/* End of the right portion div */}
            </div>
            {/* End of the mother div */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Recipes;