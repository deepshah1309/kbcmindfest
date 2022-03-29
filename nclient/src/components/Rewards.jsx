import API from "../api/util";

const Rewards = () =>{



    useEffect(()=>{
           
        API.post("/insight/get-all-insights").then((res)=>{
            console.log("insights",res.data);
        })
    },[]);

     return (
               
         <div> Rewards Card list</div>

     )

}
export default Rewards;