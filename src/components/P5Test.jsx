import p5 from 'p5'
import { onMount } from 'solid-js'

export default function P5Test() {
    onMount(()=>{
        console.log(p5)
    }) 
    return null
}