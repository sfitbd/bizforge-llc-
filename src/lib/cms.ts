import {supabase} from './supabase';
export type Settings={id?:number,business_name:string,tagline:string,hero_title:string,hero_subtitle:string,contact_email:string,contact_phone:string,business_address:string,office_hours:string,developer_credit:string,meta_title:string,meta_description:string};
export type Service={id?:number,slug:string,title:string,description:string,long_description:string,starting_price:string,icon:string,features:string[],deliverables:string[],ideal_for:string[],timeline_note:string,sort_order:number,is_active:boolean};
export type Plan={id?:number,name:string,subtitle:string,starting_price:string,features:string[],sort_order:number,is_featured:boolean,is_active:boolean};
export type Team={id?:number,name:string,role:string,bio:string,photo_url:string,sort_order:number,is_active:boolean};
export type Review={id?:number,reviewer_name:string,company:string,quote:string,rating:number,sort_order:number,is_active:boolean,verified:boolean};
export type Experience={id?:number,title:string,category:string,summary:string,details:string,sort_order:number,is_active:boolean};
export type PageBlock={id?:number,page_key:string,title:string,subtitle:string,body:string,sort_order:number,is_active:boolean};
export const defaults:Settings={business_name:'BizForge LLC',tagline:'IT • SOFTWARE • AI • AUTOMATION',hero_title:'Corporate technology delivery for modern business.',hero_subtitle:'Websites, custom software, AI automation, cloud deployment and ongoing support—from clear scope to launch and handoff.',contact_email:'',contact_phone:'',business_address:'',office_hours:'',developer_credit:'Technology implementation & support by OMS IT',meta_title:'BizForge LLC | IT, Software & AI Solutions',meta_description:'BizForge LLC provides web development, custom software, AI automation, cloud deployment and ongoing IT support.'};
async function list<T>(table:string){if(!supabase)return[] as T[];const{data}=await supabase.from(table).select('*').eq('is_active',true).order('sort_order');return(data||[])as T[]}
export async function getSettings(){if(!supabase)return defaults;const{data}=await supabase.from('site_settings').select('*').eq('id',1).maybeSingle();return(data||defaults)as Settings}
export const getServices=()=>list<Service>('cms_services');
export async function getService(slug:string){if(!supabase)return null;const{data}=await supabase.from('cms_services').select('*').eq('slug',slug).eq('is_active',true).maybeSingle();return data as Service|null}
export const getPricing=()=>list<Plan>('cms_pricing');
export const getTeam=()=>list<Team>('cms_team');
export const getReviews=()=>list<Review>('cms_reviews');
export const getExperience=()=>list<Experience>('cms_experience');
export async function getPageBlocks(page_key:string){if(!supabase)return[] as PageBlock[];const{data}=await supabase.from('cms_page_blocks').select('*').eq('page_key',page_key).eq('is_active',true).order('sort_order');return(data||[])as PageBlock[]}
