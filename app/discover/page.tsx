import DiscoverData from "../components/discover-data";

async function newest() {
    const newest = await fetch('http://localhost:3000/api/newest');
    const newestData = await newest.json();
    console.log(newestData)
    return newestData.message;
}
// newest();

async function trending() {
    const trending = await fetch('http://localhost:3000/api/trending');
    const trendingData = await trending.json();
    return trendingData.message;
}
// trending();

async function roaming() {
    const roaming = await fetch('http://localhost:3000/api/roaming');
    const roamingData = await roaming.json();
    return roamingData.message;
}
// roaming();


export default async function Discover() { 
    const newsetList = await newest();
    const trendingList = await trending();
    const roamingList = await roaming()
    
    return (
        <div>
           <DiscoverData data1={trendingList} data2={newsetList} data3 = {roamingList}/>
        </div>
    )
}