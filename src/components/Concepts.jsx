import { CORE_CONCEPTS } from "../constants/data";
import CoreConcepts from "./CoreConcepts";

export default function Concepts() {
    return(
        <ul className='core-concepts-header'>
        {CORE_CONCEPTS.map((data, i) => <CoreConcepts key={i} {...data} />)}
      </ul>
    )
}