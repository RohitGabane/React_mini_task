import { Getimg } from "./Util";
export function Avatar({person,size=200})
{
    const imgurl=Getimg(person.imageId)
    const imgsrc='Images/'+imgurl+'.jpg';
    console.log(person.imageId+ " " +person.name)
    return(
        <>
        <img className="avatar"
        src={imgsrc}
        alt={person.name}
        width={size}
        height={size}/>

        <h3>{person.name}</h3>
        
        </>
    )
}