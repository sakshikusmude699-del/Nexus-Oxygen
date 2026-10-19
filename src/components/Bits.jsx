import {useEffect,useRef,useState} from 'react';
import {MessageCircle,Phone} from 'lucide-react';
import {wa,TEL} from '../data.js';
export function Reveal({children,className='',as:T='div'}){
 const r=useRef(null);const [on,setOn]=useState(false);
 useEffect(()=>{const el=r.current;if(!el||!('IntersectionObserver' in window)){setOn(true);return}
  const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);io.disconnect()}},{threshold:.12});io.observe(el);return()=>io.disconnect()},[]);
 return <T ref={r} className={`reveal ${on?'in':''} ${className}`}>{children}</T>}
export const WaBtn=({msg,children,cls='btn-primary'})=><a className={`btn ${cls}`} href={wa(msg)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden/>{children}</a>;
export const CallBtn=({children='Call Now',cls='btn-ghost'})=><a className={`btn ${cls}`} href={`tel:${TEL}`}><Phone size={18} aria-hidden/>{children}</a>;
export function Cylinder({sym}){return <svg className="cyl" viewBox="0 0 80 150" aria-hidden><rect x="30" y="4" width="20" height="14" rx="3" fill="#19b5d4"/><path d="M22 34q0-16 18-16t18 16v100q0 10-10 10H32q-10 0-10-10z" fill="#e3f4f9" stroke="#19b5d4" strokeWidth="3"/><rect x="22" y="58" width="36" height="44" fill="#19b5d4" opacity=".25"/><text x="40" y="88" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="700" fontSize="20" fill="#0f2f57">{sym}</text></svg>}
