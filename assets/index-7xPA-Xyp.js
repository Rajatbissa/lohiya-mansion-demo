(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const Y={name:"Lohiya Mansion",tagline:"Where luxury rests",phone:"+91 11 4000 2100",email:"concierge@lohiyamansion.com",hours:"The desk replies from 8am to 10pm IST",hero:"photo-1542314831-068cd1dbfeeb",quoteImage:"photo-1551882547-ff40c63fe5fa"},U=[{n:"01",title:"Arrivals without a lobby",text:"Someone meets you at the door. There is no queue, no card machine in a marble hall, and no speech."},{n:"02",title:"Kitchens that pay attention",text:"Breakfast comes from a note you left the day before. Dietary wishes are kept. Nothing is laid out as a buffet."},{n:"03",title:"Few keys, on purpose",text:"Each house holds between eight and twelve rooms. When it is full, it is full. We do not add floors."}],Q=JSON.parse('[{"id":"udaipur","name":"Lohiya Lakehouse","city":"Udaipur","region":"Rajasthan","keys":11,"line":"The lake on one side, the house on the other, and very little in between.","description":"A private residence on the eastern bank, with its own ghat and boats that leave only when you ask. Days here are for the water. Evenings are for the courtyard, not a lobby.","arrivalNote":"Boats run in daylight. If you land after dark, the house sends a car to the ghat gate.","arrives":"2:00 pm","departs":"11:00 am","priceFrom":42000,"hero":"photo-1564501049412-61c2a3083791","amenities":["Private ghat","Boat on request","Courtyard dining","Personal host","Breakfast"],"gallery":[{"src":"photo-1566073771259-6a8506099945","alt":"Still pool at Lohiya Lakehouse"},{"src":"photo-1505693416388-ac5ce068fe85","alt":"A light-filled bedroom facing the lake"},{"src":"photo-1564501049412-61c2a3083791","alt":"The residence at dusk"}],"rooms":[{"id":"lake-room","name":"Lake Room","detail":"A quiet room on the water. King bed, stone bath, and a desk if you insist on working.","occupancy":2,"size":"42 m²","bed":"King","price":42000,"image":"photo-1505693416388-ac5ce068fe85","includes":["Breakfast","Evening boat on request"]},{"id":"jharokha-suite","name":"Jharokha Suite","detail":"A sitting room with a screened balcony, and a bedroom that keeps the afternoon sun out.","occupancy":3,"size":"68 m²","bed":"King","price":68000,"image":"photo-1578683010236-d716f9a3f461","includes":["Breakfast","Airport car over three nights"]},{"id":"pavilion","name":"The Pavilion","detail":"A detached pavilion with its own court, a long bath, and a table for four.","occupancy":4,"size":"110 m²","bed":"King and daybed","price":110000,"image":"photo-1611892440504-42a792e24d32","includes":["Breakfast","Private dining once","Airport car"]}]},{"id":"jaipur","name":"Lohiya Haveli","city":"Jaipur","region":"Rajasthan","keys":9,"line":"A haveli lane, a cool courtyard, and breakfast under the neem.","description":"A restored nineteenth-century haveli off a quiet lane in the old city. The pink stone stays cool. The courtyard is the real room of the house.","arrivalNote":"Cars stop at the mouth of the lane. A host walks you the last minute.","arrives":"2:00 pm","departs":"11:00 am","priceFrom":28000,"hero":"photo-1599661046289-e31897846e41","amenities":["Courtyard","Stepwell terrace","Personal host","Breakfast","Old-city car"],"gallery":[{"src":"photo-1477587458883-47145ed94245","alt":"The old city beyond the haveli lane"},{"src":"photo-1548013146-72479768bada","alt":"Amber light on the ramparts"},{"src":"photo-1414235077428-338989a2e8c0","alt":"A table laid in the courtyard"}],"rooms":[{"id":"courtyard","name":"Courtyard Chamber","detail":"Opens onto the court. Shutters, a king bed, and a bath lined in local stone.","occupancy":2,"size":"38 m²","bed":"King","price":28000,"image":"photo-1590490360182-c33d57733427","includes":["Breakfast"]},{"id":"sheesh","name":"Sheesh Mahal Suite","detail":"A mirrored sitting room and a bedroom that stays dim until you open it.","occupancy":3,"size":"62 m²","bed":"King","price":46000,"image":"photo-1445019980597-93fa8acb246c","includes":["Breakfast","Old-city drop"]},{"id":"zenana","name":"The Zenana Residence","detail":"The upper floor to yourself. Two rooms, a terrace, and a table that can take six at dinner.","occupancy":4,"size":"140 m²","bed":"King and twin","price":72000,"image":"photo-1600585154340-be6161a56a0c","includes":["Breakfast","One private dinner","Airport car"]}]},{"id":"goa","name":"Lohiya Shore","city":"Goa","region":"Betalbatim","keys":8,"line":"A low house behind the dunes. No beach club. A long table and the sea at the end of a path.","description":"Set back from the sand at Betalbatim, where the beach is still a beach. The pool is long and quiet. Dinner is one table, not a restaurant.","arrivalNote":"The house is off the main road. Send your arrival time and someone will be at the gate.","arrives":"1:00 pm","departs":"11:00 am","priceFrom":32000,"hero":"photo-1566073771259-6a8506099945","amenities":["Dune path","Quiet pool","Long-table dinner","Breakfast","Personal host"],"gallery":[{"src":"photo-1576013551627-0cc20b96c2a7","alt":"The pool behind the dunes"},{"src":"photo-1507525428034-b723cf961d3e","alt":"The beach at the end of the path"},{"src":"photo-1414235077428-338989a2e8c0","alt":"Dinner at the long table"}],"rooms":[{"id":"garden","name":"Garden Room","detail":"A low room on the garden, with a verandah and a bath open to the sky.","occupancy":2,"size":"40 m²","bed":"King","price":32000,"image":"photo-1611892440504-42a792e24d32","includes":["Breakfast"]},{"id":"sea","name":"Sea Suite","detail":"An upper suite with a glimpse of the water and a daybed for the afternoon.","occupancy":3,"size":"64 m²","bed":"King","price":54000,"image":"photo-1618773928121-c32242e63f39","includes":["Breakfast","Airport car over three nights"]},{"id":"casa","name":"The Casa","detail":"The end of the house. Two bedrooms, a private stretch of pool, and your own table.","occupancy":4,"size":"120 m²","bed":"Two kings","price":88000,"image":"photo-1631049307264-da0ec9d70304","includes":["Breakfast","One dinner","Airport car"]}]},{"id":"rishikesh","name":"Lohiya Cliff","city":"Rishikesh","region":"Uttarakhand","keys":10,"line":"Above the Ganges, where the morning arrives as mist.","description":"A cedar ridge over the river. Fires in the evening. Yoga is available and never put on your schedule. The house is for people who came to be left alone.","arrivalNote":"The last stretch is a private climb. Tell us if anyone in the party would rather avoid stairs.","arrives":"1:00 pm","departs":"11:00 am","priceFrom":24000,"hero":"photo-1506905925346-21bda4d32df4","amenities":["River view","Evening fire","Yoga on request","Breakfast","Personal host"],"gallery":[{"src":"photo-1470770841072-f978cf4d019e","alt":"The ridge house in the hills"},{"src":"photo-1504893524553-b855bce32c67","alt":"The river below the cliff"},{"src":"photo-1544161515-4ab6ce6db874","alt":"A quiet treatment room"}],"rooms":[{"id":"ridge","name":"Ridge Room","detail":"A timber room with a window on the valley and a wool throw for the evening.","occupancy":2,"size":"36 m²","bed":"King","price":24000,"image":"photo-1445019980597-93fa8acb246c","includes":["Breakfast"]},{"id":"river","name":"River Suite","detail":"A sitting corner, a deeper bath, and the river in the sound of the room.","occupancy":3,"size":"58 m²","bed":"King","price":41000,"image":"photo-1578683010236-d716f9a3f461","includes":["Breakfast","One fire-side supper"]},{"id":"villa","name":"The Retreat Villa","detail":"A separate villa with a terrace, a writing room, and a path that does not pass other doors.","occupancy":4,"size":"105 m²","bed":"King and daybed","price":76000,"image":"photo-1470770841072-f978cf4d019e","includes":["Breakfast","Private supper","Dehradun car"]}]},{"id":"mumbai","name":"Lohiya Atelier","city":"Mumbai","region":"Colaba","keys":12,"line":"Twelve keys in Colaba, for the city and a door that actually shuts.","description":"A small residence above the noise, hung with work we would live with. For people who want Mumbai, and a room that does not feel like a hotel.","arrivalNote":"There is no porte-cochère. The lift opens into the residence, not a lobby.","arrives":"3:00 pm","departs":"12:00 pm","priceFrom":38000,"hero":"photo-1566552881560-0be862a7c445","amenities":["City silence","Art-led rooms","Personal host","Breakfast","Car on call"],"gallery":[{"src":"photo-1542314831-068cd1dbfeeb","alt":"The city residence after dark"},{"src":"photo-1596436889106-be35e843f974","alt":"The sitting room"},{"src":"photo-1570168007204-dfb528c6958f","alt":"Colaba and the harbour"}],"rooms":[{"id":"city","name":"City Room","detail":"A calm room off the corridor. Blackout, a proper desk, and a bath that is not an afterthought.","occupancy":2,"size":"34 m²","bed":"King","price":38000,"image":"photo-1618773928121-c32242e63f39","includes":["Breakfast"]},{"id":"gallery","name":"Gallery Suite","detail":"A sitting wall for the art, then a bedroom behind it. The city is there if you open the linen.","occupancy":3,"size":"60 m²","bed":"King","price":62000,"image":"photo-1631049307264-da0ec9d70304","includes":["Breakfast","Airport car over three nights"]},{"id":"apartment","name":"The Atelier Apartment","detail":"A one-bedroom apartment with a kitchen you may ignore, and a table for late dinners.","occupancy":4,"size":"98 m²","bed":"King","price":95000,"image":"photo-1600585154340-be6161a56a0c","includes":["Breakfast","One private dinner","Airport car"]}]},{"id":"jaisalmer","name":"Lohiya Dune","city":"Jaisalmer","region":"Rajasthan","keys":9,"line":"Inside the old walls. Sand at the door, and a courtyard that keeps the heat out.","description":"A sandstone house in the fort town, not a desert camp. The terrace takes the last light. Dinner is in the court, after the lane has gone quiet.","arrivalNote":"Cars stop below the fort gate. A host walks you up. Tell us if anyone would rather not climb.","arrives":"1:00 pm","departs":"11:00 am","priceFrom":30000,"hero":"photo-1627301517152-11505d049286","amenities":["Sandstone court","Sunset terrace","Personal host","Breakfast","Fort car"],"gallery":[{"src":"photo-1586612438666-ffd0ae97ad36","alt":"The fort wall after dark"},{"src":"photo-1590490360182-c33d57733427","alt":"A cool bedroom off the court"},{"src":"photo-1414235077428-338989a2e8c0","alt":"Dinner in the courtyard"}],"rooms":[{"id":"dune-room","name":"Dune Room","detail":"A shuttered room on the court. King bed, a stone bath, and thick walls.","occupancy":2,"size":"36 m²","bed":"King","price":30000,"image":"photo-1590490360182-c33d57733427","includes":["Breakfast"]},{"id":"rampart","name":"Rampart Suite","detail":"A sitting room and a bedroom with a jharokha toward the town.","occupancy":3,"size":"58 m²","bed":"King","price":48000,"image":"photo-1445019980597-93fa8acb246c","includes":["Breakfast","Sunset tea"]},{"id":"haveli-floor","name":"The Haveli Floor","detail":"The upper floor to yourself. Two rooms, the terrace, and a table for six.","occupancy":4,"size":"120 m²","bed":"King and twin","price":70000,"image":"photo-1600585154340-be6161a56a0c","includes":["Breakfast","One private dinner","Airport car"]}]},{"id":"alleppey","name":"Lohiya Kayal","city":"Alleppey","region":"Kerala","keys":8,"line":"A still boat on the backwater. It does not move unless you ask.","description":"A private kettuvallam kept as a house, not a cruise. The kitchen is on board. The banks go past only when you want them to.","arrivalNote":"The car stops at the jetty. The boat is a short ride from there, in daylight.","arrives":"12:00 pm","departs":"10:00 am","priceFrom":34000,"hero":"photo-1602216056096-3b40cc0c9944","amenities":["Private boat","On-board kitchen","Personal host","Breakfast","Still water"],"gallery":[{"src":"photo-1476514525535-07fb3b4ae5f1","alt":"Still water beside the boat"},{"src":"photo-1505693416388-ac5ce068fe85","alt":"A cabin with linen and light"},{"src":"photo-1414235077428-338989a2e8c0","alt":"A meal laid on deck"}],"rooms":[{"id":"cabin","name":"Kayal Cabin","detail":"A wide cabin with a king bed and a window on the water.","occupancy":2,"size":"28 m²","bed":"King","price":34000,"image":"photo-1505693416388-ac5ce068fe85","includes":["Breakfast","All meals"]},{"id":"deck","name":"Deck Suite","detail":"The forward cabin, with a daybed on deck and a deeper bath.","occupancy":3,"size":"40 m²","bed":"King","price":52000,"image":"photo-1578683010236-d716f9a3f461","includes":["Breakfast","All meals"]},{"id":"kayal-house","name":"The Whole Boat","detail":"The boat to yourself. Two cabins, the deck, and a cook who already knows the note you sent.","occupancy":4,"size":"The boat","bed":"Two kings","price":86000,"image":"photo-1602216056096-3b40cc0c9944","includes":["All meals","The boat does not share","Jetty car"]}]},{"id":"shimla","name":"Lohiya Cedar","city":"Shimla","region":"Himachal","keys":10,"line":"A cedar house above the mall, far enough that the band does not reach you.","description":"Set on a ridge of deodar, with fires in the evening and a walk that does not pass the shops. Shimla is there if you want it. The house does not insist.","arrivalNote":"The last bend is narrow. Send your arrival time and the house will meet the car.","arrives":"1:00 pm","departs":"11:00 am","priceFrom":22000,"hero":"photo-1464822759023-fed622ff2c3b","amenities":["Cedar ridge","Evening fire","Personal host","Breakfast","Ridge walk"],"gallery":[{"src":"photo-1470770841072-f978cf4d019e","alt":"The house among the trees"},{"src":"photo-1445019980597-93fa8acb246c","alt":"A warm bedroom"},{"src":"photo-1544161515-4ab6ce6db874","alt":"A quiet room for the afternoon"}],"rooms":[{"id":"cedar-room","name":"Cedar Room","detail":"A timber room with a wool throw and a window into the trees.","occupancy":2,"size":"32 m²","bed":"King","price":22000,"image":"photo-1445019980597-93fa8acb246c","includes":["Breakfast"]},{"id":"ridge-suite","name":"Ridge Suite","detail":"A sitting corner, a deeper bath, and the valley when the cloud lifts.","occupancy":3,"size":"54 m²","bed":"King","price":38000,"image":"photo-1470770841072-f978cf4d019e","includes":["Breakfast","Evening fire"]},{"id":"bungalow","name":"The Bungalow","detail":"A separate bungalow with two rooms, its own verandah, and a path that does not pass other doors.","occupancy":4,"size":"110 m²","bed":"King and twin","price":64000,"image":"photo-1600585154340-be6161a56a0c","includes":["Breakfast","Private supper","Station car"]}]},{"id":"coorg","name":"Lohiya Grove","city":"Coorg","region":"Karnataka","keys":8,"line":"Coffee shade, a long verandah, and rain that is allowed to be the plan.","description":"An estate house in the coffee, with a verandah for the whole day. Walks are offered, never scheduled. The kitchen cooks what the estate has.","arrivalNote":"The estate road is slow after rain. Send your landing time in Mangalore or Mysore.","arrives":"1:00 pm","departs":"11:00 am","priceFrom":27000,"hero":"photo-1542273917363-3b1817f69a2d","amenities":["Coffee estate","Long verandah","Personal host","Breakfast","Estate walks"],"gallery":[{"src":"photo-1576013551627-0cc20b96c2a7","alt":"The pool under the trees"},{"src":"photo-1611892440504-42a792e24d32","alt":"A room opening to the verandah"},{"src":"photo-1414235077428-338989a2e8c0","alt":"A table on the estate"}],"rooms":[{"id":"grove-room","name":"Grove Room","detail":"A low room on the verandah. King bed, a bath, and the coffee just beyond the rail.","occupancy":2,"size":"38 m²","bed":"King","price":27000,"image":"photo-1611892440504-42a792e24d32","includes":["Breakfast"]},{"id":"plantation","name":"Plantation Suite","detail":"A sitting room and a bedroom that stays dim under the shade.","occupancy":3,"size":"60 m²","bed":"King","price":44000,"image":"photo-1578683010236-d716f9a3f461","includes":["Breakfast","Estate walk"]},{"id":"estate-house","name":"The Estate House","detail":"A separate house in the grove. Two bedrooms, a verandah, and your own table.","occupancy":4,"size":"130 m²","bed":"Two kings","price":78000,"image":"photo-1576013551627-0cc20b96c2a7","includes":["Breakfast","One estate dinner","Airport car"]}]},{"id":"pondicherry","name":"Lohiya Verandah","city":"Pondicherry","region":"Tamil Nadu","keys":10,"line":"A still pool, a white court, and the sea a short walk off.","description":"Set just off the promenade, with a pool that is not a club and breakfast in the court. The beach is close enough to walk, and far enough that the house stays still.","arrivalNote":"The lane is one way. The house sends a pin, and someone meets you at the corner.","arrives":"2:00 pm","departs":"11:00 am","priceFrom":24000,"hero":"photo-1571896349842-33c89424de2d","amenities":["Courtyard","Sea walk","Personal host","Breakfast","Bicycles"],"gallery":[{"src":"photo-1551882547-ff40c63fe5fa","alt":"The white house at dusk"},{"src":"photo-1618773928121-c32242e63f39","alt":"A shuttered bedroom"},{"src":"photo-1414235077428-338989a2e8c0","alt":"Breakfast in the court"}],"rooms":[{"id":"shutter","name":"Shutter Room","detail":"A high-ceiling room on the court. King bed, a writing table, and shutters you can actually close.","occupancy":2,"size":"34 m²","bed":"King","price":24000,"image":"photo-1618773928121-c32242e63f39","includes":["Breakfast"]},{"id":"court-suite","name":"Court Suite","detail":"A sitting room on the verandah and a bedroom behind it.","occupancy":3,"size":"56 m²","bed":"King","price":40000,"image":"photo-1631049307264-da0ec9d70304","includes":["Breakfast","Bicycles"]},{"id":"townhouse","name":"The Townhouse","detail":"The upper floor. Two rooms, a terrace toward the roofs, and a table for late dinners.","occupancy":4,"size":"100 m²","bed":"King and daybed","price":68000,"image":"photo-1600585154340-be6161a56a0c","includes":["Breakfast","One private dinner","Airport car"]}]},{"id":"jodhpur","name":"Lohiya Mehr","city":"Jodhpur","region":"Rajasthan","keys":9,"line":"Below the fort, a blue lane, and a terrace that takes the evening wind.","description":"A restored house in the old city, under Mehrangarh. The terrace is the room that matters. The lane is too narrow for a show of arrival, which is the point.","arrivalNote":"Cars stop at the clock tower side. A host walks you the last few minutes.","arrives":"2:00 pm","departs":"11:00 am","priceFrom":29000,"hero":"photo-1718923085467-b0bee953eb09","amenities":["Blue lane","Wind terrace","Personal host","Breakfast","Old-city walk"],"gallery":[{"src":"photo-1477587458883-47145ed94245","alt":"The old city in the evening"},{"src":"photo-1590490360182-c33d57733427","alt":"A bedroom with shutters"},{"src":"photo-1414235077428-338989a2e8c0","alt":"Dinner on the terrace"}],"rooms":[{"id":"blue-room","name":"Blue Room","detail":"A cool room off the court. King bed, a stone bath, and a jali that keeps the lane out.","occupancy":2,"size":"36 m²","bed":"King","price":29000,"image":"photo-1590490360182-c33d57733427","includes":["Breakfast"]},{"id":"wind","name":"Wind Suite","detail":"A bedroom and a terrace corner that takes the evening breeze.","occupancy":3,"size":"62 m²","bed":"King","price":47000,"image":"photo-1578683010236-d716f9a3f461","includes":["Breakfast","Fort drop"]},{"id":"wind-house","name":"The Wind House","detail":"The top floor. Two rooms, the whole terrace, and a table that can take six.","occupancy":4,"size":"125 m²","bed":"King and twin","price":74000,"image":"photo-1600585154340-be6161a56a0c","includes":["Breakfast","One private dinner","Airport car"]}]}]'),w={brand:Y,principles:U,hotels:Q},k=t=>`https://images.unsplash.com/${t}?auto=format&fit=crop&w=3840&q=85`;function V(t){return{...t,hero:k(t.hero),gallery:t.gallery.map(e=>({...e,src:k(e.src)})),rooms:t.rooms.map(e=>({...e,image:k(e.image)}))}}const l={...w.brand,hero:k(w.brand.hero),quoteImage:k(w.brand.quoteImage)},Z=w.principles,d=w.hotels.map(V);function p(t){return d.find(e=>e.id===t)}function N(t,e){return t==null?void 0:t.rooms.find(a=>a.id===e)}const R="lohiya-stays",z="lohiya-notes",x="lohiya-search";function _(t){try{return JSON.parse(localStorage.getItem(t))||[]}catch{return[]}}function O(){const t=_(R);return Array.isArray(t)?t:[]}function X(t){try{const e=O();return e.unshift(t),localStorage.setItem(R,JSON.stringify(e)),!0}catch{return!1}}function ee(t,e){const a=O().map(o=>o.id===t?{...o,...e}:o);localStorage.setItem(R,JSON.stringify(a))}function j(t){return O().find(e=>e.id===t)}function te(t){try{const e=_(z),a=Array.isArray(e)?e:[];return a.unshift(t),localStorage.setItem(z,JSON.stringify(a)),!0}catch{return!1}}function ae(){try{const t=JSON.parse(sessionStorage.getItem(x));return t&&typeof t=="object"?t:{}}catch{return{}}}function S(t){sessionStorage.setItem(x,JSON.stringify({destination:t.destination||"all",checkIn:t.checkIn||"",checkOut:t.checkOut||"",guests:String(t.guests||"2")}))}function h(t){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(t)}function n(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function b(){const t=new Date,e=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}function g(t){return/^\d{4}-\d{2}-\d{2}$/.test(t||"")?t:""}function oe(t,e){if(!g(t)||!g(e))return 0;const a=Date.parse(`${e}T00:00:00`)-Date.parse(`${t}T00:00:00`);return Number.isFinite(a)?Math.round(a/864e5):0}function $(t,e,a){const o=oe(e,a);if(o<=0)return null;const s=t*o,i=Math.round(s*.18);return{nights:o,room:s,tax:i,total:s+i}}function I(t){if(!g(t))return"";const[e,a,o]=t.split("-").map(Number);return new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric"}).format(new Date(e,a-1,o))}function M(t){const e=Number(t);return`${e} guest${e===1?"":"s"}`}let L=null;function q(){const t=(location.hash||"#/").replace(/^#/,""),e=t.indexOf("?"),a=e===-1?t:t.slice(0,e),o=e===-1?"":t.slice(e+1);return{parts:a.split("/").filter(Boolean),params:new URLSearchParams(o)}}function P(t){const e=Number(t);return Number.isInteger(e)&&e>=1&&e<=6?String(e):"2"}function W(t){return t==="all"||p(t)?t:"all"}function v(){const{params:t}=q(),e=ae(),a=o=>t.get(o)||e[o]||"";return{destination:W(a("destination")||"all"),checkIn:g(a("checkIn")),checkOut:g(a("checkOut")),guests:P(a("guests")||"2")}}function K(t){const e=new URLSearchParams;return e.set("destination",W(t.destination||"all")),t.checkIn&&e.set("checkIn",t.checkIn),t.checkOut&&e.set("checkOut",t.checkOut),e.set("guests",P(t.guests)),t.sort==="price"&&e.set("sort","price"),e.toString()}function B({checkIn:t,checkOut:e},a){const o=!!t,s=!!e;if(!o&&!s)return a?"Choose your arrival and departure.":"";if(o!==s)return"Choose both check-in and check-out.";if(!g(t)||!g(e))return"Those dates do not look right.";if(t<b())return"Check-in cannot be in the past.";const i=$(1,t,e);return i?i.nights>30?"For stays longer than 30 nights, write to the desk.":"":"Check-out has to be after check-in."}function ne(t){if(!t.name||t.name.trim().length<2)return"Add the guest name.";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email||""))return"Add an email the desk can use.";const e=String(t.phone||"").replace(/\D/g,"");return e.length<8||e.length>15?"Add a phone number the desk can call.":""}function se(t){return!t.name||t.name.trim().length<2?"Add your name.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email||"")?(t.message||"").trim().length<8?"Write a short note for the desk.":(t.message||"").trim().length>1e3?"Keep the note under 1000 characters.":"":"Add an email the desk can use."}function ie(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";for(let e=0;e<5;e+=1){let a="LM";for(let o=0;o<6;o+=1)a+=t[Math.floor(Math.random()*t.length)];if(!j(a))return a}return`LM${Date.now().toString(36).toUpperCase()}`}function E(t){return[1,2,3,4,5,6].map(e=>`<option value="${e}"${String(t)===String(e)?" selected":""}>${M(e)}</option>`).join("")}function y(t,e,a=!1){const o=a?'fetchpriority="high"':'loading="lazy"';return`<img src="${n(t)}" alt="${n(e)}" ${o} />`}function A(t,e,a){return`<a href="${t}"${a?' aria-current="page"':""}>${e}</a>`}function re(t){const e=q().parts[0]||"",a=window.scrollY>40,o=t?`over-hero${a?" is-scrolled":""}`:"is-solid",s=["residences","stay","book"].includes(e);return`<header class="site-header ${o}">
    <div class="wrap site-header__inner">
      <a class="logo" href="#/" aria-label="Lohiya Mansion, home">
        <img src="./brand/logo.png" alt="" />
      </a>
      <button class="menu-btn" type="button" data-action="menu" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="nav" id="site-nav">
        ${A("#/residences","Residences",s)}
        ${A("#/about","The House",e==="about")}
        ${A("#/contact","Contact",e==="contact")}
        ${A("#/stays","My stays",e==="stays"||e==="confirm")}
        <a class="btn" href="#/residences">Reserve</a>
      </nav>
    </div>
  </header>`}function ce(){return`<footer class="footer">
    <div class="wrap footer__grid">
      <div>
        <a href="#/"><img class="footer-logo" src="./brand/logo.png" alt="Lohiya Mansion" /></a>
      </div>
      <div>
        <h3>Residences</h3>
        <ul>${d.map(e=>`<li><a href="#/stay/${e.id}">${n(e.city)}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h3>The house</h3>
        <ul>
          <li><a href="#/about">Our manner</a></li>
          <li><a href="#/contact">Concierge</a></li>
          <li><a href="#/stays">My stays</a></li>
        </ul>
      </div>
      <div>
        <h3>Desk</h3>
        <ul>
          <li><a href="tel:${n(l.phone.replace(/\s/g,""))}">${n(l.phone)}</a></li>
          <li><a href="mailto:${n(l.email)}">${n(l.email)}</a></li>
          <li>${n(l.hours)}</li>
        </ul>
      </div>
    </div>
    <div class="wrap legal">
      <span>© ${new Date().getFullYear()} Lohiya Mansion</span>
      <span>Every stay is confirmed by the house before it is held.</span>
      <a class="credit" href="https://boostbyrajat.onrender.com/" target="_blank" rel="noopener noreferrer"><img src="./brand/boostbyrajat.png" alt="" width="44" height="44" />Website by BoostByRajat</a>
    </div>
  </footer>`}function le(t,e){return`${re(e)}<main id="content" class="${e?"":"has-offset"}">${t}</main>${ce()}`}function H(t){return`<form id="search-form" class="search" aria-label="Search stays">
    <label class="field">
      <span>Residence</span>
      <select name="destination">${[`<option value="all"${t.destination==="all"?" selected":""}>All residences</option>`].concat(d.map(a=>`<option value="${a.id}"${t.destination===a.id?" selected":""}>${n(a.city)} — ${n(a.name)}</option>`)).join("")}</select>
    </label>
    <label class="field">
      <span>Check-in</span>
      <input type="date" name="checkIn" value="${n(t.checkIn)}" min="${b()}" />
    </label>
    <label class="field">
      <span>Check-out</span>
      <input type="date" name="checkOut" value="${n(t.checkOut)}" min="${b()}" />
    </label>
    <label class="field">
      <span>Guests</span>
      <select name="guests">${E(t.guests)}</select>
    </label>
    <button type="submit">Search stays</button>
    <p class="form-error"></p>
  </form>`}function G(t){return`<a class="stay-card" href="#/stay/${t.id}">
    ${y(t.hero,`${t.name} in ${t.city}`)}
    <span class="stay-card__body">
      <span class="stay-card__meta">${n(t.city)} · ${t.keys} keys</span>
      <strong>${n(t.name)}</strong>
      <em>From ${h(t.priceFrom)} / night</em>
    </span>
  </a>`}function u(t,e,a,o=!1){return`<header class="page-head wrap${o?" page-head--wide":""}">
    <p class="eyebrow">${t}</p>
    <h1>${e}</h1>
    ${a?`<p class="lede">${a}</p>`:""}
  </header>`}function de(){const t=v();return`<section class="hero">
      ${y(l.hero,"",!0)}
      <div class="hero__shade"></div>
      <div class="wrap hero__content">
        <p class="eyebrow">The house of Lohiya</p>
        <h1>Where luxury rests</h1>
        <p class="lede">${d.length} private residences across India, kept for people who would rather not be managed.</p>
        ${H(t)}
        <p class="hero__note">A request, not a charge. The house confirms every stay.</p>
      </div>
    </section>
    <section class="section wrap">
      <div class="section-head">
        <div>
          <p class="eyebrow">${d.length} addresses</p>
          <h2>Choose where you rest</h2>
        </div>
        <a href="#/residences">All residences</a>
      </div>
      <p class="swipe-hint">Swipe for the next house</p>
      <div class="feature-grid">${d.map(G).join("")}</div>
    </section>
    <section class="quote-band">
      ${y(l.quoteImage,"")}
      <div class="quote-band__shade"></div>
      <div class="wrap">
        <p>We do not decorate silence. We protect it.</p>
        <cite>Lohiya Lakehouse, Udaipur</cite>
      </div>
    </section>
    <section class="section wrap">
      <p class="eyebrow">The manner</p>
      <h2>How the houses behave</h2>
      <div class="principles">
        ${Z.map(e=>`<article class="principle">
              <b>${n(e.n)}</b>
              <h3>${n(e.title)}</h3>
              <p>${n(e.text)}</p>
            </article>`).join("")}
      </div>
    </section>
    <section class="cta">
      <div class="wrap">
        <p class="eyebrow">The desk is open</p>
        <h2>Tell us when you would like the house.</h2>
        <a class="btn" href="#/residences">Plan a stay</a>
      </div>
    </section>`}function he(t){const e=v(),a=t.get("sort")==="price"?"price":"featured",o=e.destination==="all"?[...d]:d.filter(r=>r.id===e.destination);a==="price"&&o.sort((r,c)=>r.priceFrom-c.priceFrom);const s=`${o.length} residence${o.length===1?"":"s"}`,i=o.length?`<div class="card-grid">${o.map(G).join("")}</div>`:'<p class="muted">No residence matches that search.</p>';return`${u("Residences",d.length+" places to disappear.","Pick a house, then a room. The desk confirms what is actually free.")}
    <div class="wrap toolbar">
      ${H(e)}
      <div class="toolbar__row">
        <p>${s}</p>
        <label>
          <span>Sort</span>
          <select id="sort-stays" name="sort">
            <option value="featured"${a==="featured"?" selected":""}>Featured</option>
            <option value="price"${a==="price"?" selected":""}>Nightly rate</option>
          </select>
        </label>
      </div>
      ${i}
    </div>`}function ue(t){const e=p(t);if(!e)return D();const a=v(),o=$(1,a.checkIn,a.checkOut),s=e.rooms.map(i=>{const r=o?$(i.price,a.checkIn,a.checkOut):null,c=Number(a.guests)>i.occupancy,T=r?`<p class="price">${h(r.total)} <span>${r.nights} nights, with GST</span></p>`:`<p class="price">${h(i.price)} <span>a night, before tax</span></p>`,f=K({...a,destination:e.id});return`<article class="room">
        ${y(i.image,i.name)}
        <div>
          <h3>${n(i.name)}</h3>
          <p>${n(i.detail)}</p>
          <p class="room__facts">Sleeps ${i.occupancy} · ${n(i.size)} · ${n(i.bed)}</p>
          <p class="room__facts">${i.includes.map(n).join(" · ")}</p>
          ${c?`<p class="form-error">This room sleeps ${i.occupancy}.</p>`:""}
        </div>
        <div class="room__buy">
          ${T}
          <a class="btn" href="#/book/${e.id}/${i.id}?${f}">Reserve</a>
        </div>
      </article>`}).join("");return`<section class="stay-hero">
      ${y(e.hero,"",!0)}
      <div class="stay-hero__shade"></div>
      <div class="wrap stay-hero__title">
        <p class="eyebrow">${n(e.city)}, ${n(e.region)}</p>
        <h1>${n(e.name)}</h1>
        <p>${n(e.line)}</p>
      </div>
    </section>
    <section class="section wrap stay-copy">
      <div>
        <p class="eyebrow">${e.keys} keys</p>
        <h2>The house</h2>
        <p>${n(e.description)}</p>
        <ul class="amenity-row">${e.amenities.map(i=>`<li>${n(i)}</li>`).join("")}</ul>
      </div>
      <aside class="practical">
        <p><span>Arrive</span> ${n(e.arrives)}</p>
        <p><span>Depart</span> ${n(e.departs)}</p>
        <p>${n(e.arrivalNote)}</p>
      </aside>
    </section>
    <div class="wrap gallery">
      ${e.gallery.map(i=>y(i.src,i.alt)).join("")}
    </div>
    <section class="section wrap">
      <div class="section-head">
        <div>
          <p class="eyebrow">Rooms</p>
          <h2>Where you will sleep</h2>
        </div>
      </div>
      <form id="stay-dates" class="datebar">
        <label>
          <span>Check-in</span>
          <input type="date" name="checkIn" value="${n(a.checkIn)}" min="${b()}" />
        </label>
        <label>
          <span>Check-out</span>
          <input type="date" name="checkOut" value="${n(a.checkOut)}" min="${b()}" />
        </label>
        <label>
          <span>Guests</span>
          <select name="guests">${E(a.guests)}</select>
        </label>
        <button class="btn" type="submit">Update stay</button>
        <p class="form-error" id="stay-date-error"></p>
      </form>
      <div class="rooms">${s}</div>
    </section>`}function pe(t,e){const a=p(t),o=N(a,e);if(!a||!o)return D();const s=v();return`${u(n(a.city),`Reserve ${n(o.name)}`,`${n(a.name)} · sleeps ${o.occupancy} · ${n(o.size)}`,!0)}
  <div class="wrap book">
    <form id="book-form">
      <input type="hidden" name="hotelId" value="${n(a.id)}" />
      <input type="hidden" name="roomId" value="${n(o.id)}" />
      <h2 class="form-title">Your details</h2>
      <div class="fields">
        <label>
          <span>Check-in</span>
          <input type="date" name="checkIn" value="${n(s.checkIn)}" min="${b()}" required />
        </label>
        <label>
          <span>Check-out</span>
          <input type="date" name="checkOut" value="${n(s.checkOut)}" min="${b()}" required />
        </label>
        <label>
          <span>Guests</span>
          <select name="guests">${E(s.guests)}</select>
        </label>
        <label>
          <span>Full name</span>
          <input name="name" autocomplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autocomplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autocomplete="tel" required />
        </label>
        <label class="wide">
          <span>Note for the house</span>
          <textarea name="notes" maxlength="500" placeholder="Arrival time, a celebration, a room away from stairs"></textarea>
        </label>
      </div>
      <p class="form-error" id="book-error"></p>
      <button class="btn" id="book-submit" type="submit">Request this stay</button>
    </form>
    <aside class="summary">
      ${y(o.image,o.name)}
      <p class="eyebrow">${n(a.city)}</p>
      <h2>${n(o.name)}</h2>
      <p class="muted">${n(a.name)}</p>
      <div id="price-lines"></div>
    </aside>
  </div>`}function me(t){const e=j(t);return e?`${u("Request received","The house has your dates.","Nothing is charged now. The desk confirms what is free, then writes to you.")}
    <div class="wrap confirm">
      <p class="ref">${n(e.id)}</p>
      <dl>
        <div><dt>Residence</dt><dd>${n(e.hotelName)}</dd></div>
        <div><dt>Room</dt><dd>${n(e.roomName)}</dd></div>
        <div><dt>Dates</dt><dd>${n(I(e.checkIn))} – ${n(I(e.checkOut))}</dd></div>
        <div><dt>Stay</dt><dd>${e.nights} nights · ${M(e.guests)}</dd></div>
        <div><dt>Total with GST</dt><dd>${h(e.total)}</dd></div>
        <div><dt>Status</dt><dd class="status">${n(e.status)}</dd></div>
      </dl>
      <p class="muted">The desk will reply at ${n(e.email)}. You can withdraw this request until then.</p>
      <p class="confirm__actions">
        <a class="btn" href="#/stays">My stays</a>
        <a class="btn btn--ghost" href="#/residences">Another residence</a>
      </p>
    </div>`:`${u("Request","We could not find that stay.","Requests live on this device. If you used another browser, the desk will still have nothing here.")}
      <div class="wrap"><a class="btn" href="#/stays">My stays</a></div>`}function fe(){const t=d.map(e=>`<li>
        <a href="#/stay/${e.id}">
          <strong>${n(e.name)}</strong>
          <span>${n(e.city)}, ${n(e.region)} · ${e.keys} keys · from ${h(e.priceFrom)}</span>
        </a>
      </li>`).join("");return`${u("The house","A small collection, kept properly.","Lohiya Mansion is "+d.length+" private residences. We cook, we meet you at the door, and we leave you alone unless you ask.")}
    <section class="section wrap about-grid">
      <div class="prose">
        <p>The houses do not share a lobby, a points programme, or a buffet. They share a manner: few keys, a host who knows your name, and a kitchen that read yesterday’s note.</p>
        <p>Reservations are requests. The desk checks the house, then confirms. Until then, the dates are a wish, not a charge.</p>
        <a class="btn" href="#/residences">See the residences</a>
      </div>
      <ol class="address-list">${t}</ol>
    </section>`}function ye(){if(L)return`${u("Noted","The desk has your note.",`We will reply at ${n(L)}.`)}
      <div class="wrap"><button class="btn" type="button" data-action="reset-note">Send another</button></div>`;const t=['<option value="Not sure yet">Not sure yet</option>'].concat(d.map(e=>`<option value="${n(e.name)}">${n(e.city)} — ${n(e.name)}</option>`)).join("");return`${u("Concierge","Write to the desk.",n(l.hours))}
    <section class="section wrap split">
      <aside class="practical">
        <p><span>Phone</span> <a href="tel:${n(l.phone.replace(/\s/g,""))}">${n(l.phone)}</a></p>
        <p><span>Email</span> <a href="mailto:${n(l.email)}">${n(l.email)}</a></p>
        <p>For a stay already requested, keep your reference. It begins with LM.</p>
      </aside>
      <form id="contact-form" class="fields">
        <label>
          <span>Name</span>
          <input name="name" autocomplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autocomplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autocomplete="tel" />
        </label>
        <label>
          <span>Residence</span>
          <select name="residence">${t}</select>
        </label>
        <label class="wide">
          <span>Note</span>
          <textarea name="message" required placeholder="Dates, a city, or a question for the desk"></textarea>
        </label>
        <p class="form-error" id="contact-error"></p>
        <button class="btn" type="submit">Send to the desk</button>
      </form>
    </section>`}function be(){const t=O();if(!t.length)return`${u("My stays","Nothing requested yet.","When you send a reservation from this browser, it will wait here until the house replies.")}
      <div class="wrap"><a class="btn" href="#/residences">Plan a stay</a></div>`;const e=t.map(a=>{const o=a.status==="requested"?`<button class="btn btn--ghost" type="button" data-action="withdraw" data-id="${n(a.id)}">Cancel request</button>`:"";return`<article class="stay-item">
        <div>
          <p class="status">${n(a.status)}</p>
          <h2>${n(a.hotelName)}</h2>
          <p>${n(a.roomName)} · ${n(I(a.checkIn))} – ${n(I(a.checkOut))}</p>
          <p class="muted">${a.nights} nights · ${M(a.guests)} · ${h(a.total)} with GST</p>
        </div>
        <div class="stay-item__side">
          <p class="ref ref--small">${n(a.id)}</p>
          ${o}
          <a href="#/confirm/${n(a.id)}">Open</a>
        </div>
      </article>`}).join("");return`${u("My stays","Requests on this device.","Cancel one if your plans change. The desk treats that as released.")}
    <div class="wrap stay-list">${e}</div>`}function D(){return`${u("Missing","This page is not in the house.","")}
    <div class="wrap"><a class="btn" href="#/">Back home</a></div>`}function m(){const{parts:t,params:e}=q(),[a,o,s]=t;let i=D(),r="Not found — Lohiya Mansion",c=!1;a?a==="residences"?(i=he(e),r="Residences — Lohiya Mansion"):a==="stay"&&o&&p(o)?(i=ue(o),r=`${p(o).name} — Lohiya Mansion`):a==="book"&&o&&s&&N(p(o),s)?(i=pe(o,s),r="Reserve — Lohiya Mansion"):a==="confirm"&&o?(i=me(o),r="Request received — Lohiya Mansion"):a==="about"?(i=fe(),r="The House — Lohiya Mansion"):a==="contact"?(i=ye(),r="Contact — Lohiya Mansion"):a==="stays"&&(i=be(),r="My stays — Lohiya Mansion"):(c=!0,i=de(),r="Lohiya Mansion — Where luxury rests"),document.title=r,document.body.classList.remove("nav-open"),document.getElementById("app").innerHTML=le(i,c),window.scrollTo(0,0),J()}function J(){const t=document.getElementById("book-form"),e=document.getElementById("price-lines"),a=document.getElementById("book-submit");if(!t||!e||!a)return;const o=Object.fromEntries(new FormData(t)),s=N(p(o.hotelId),o.roomId);if(!s)return;const i=B(o,!0),r=Number(o.guests)>s.occupancy,c=$(s.price,o.checkIn,o.checkOut);if(i||!c){e.innerHTML=`<p class="muted">${n(i||"Add dates to see the total.")}</p>`,a.disabled=!0;return}if(r){e.innerHTML=`<p class="form-error">${n(s.name)} sleeps ${s.occupancy}.</p>`,a.disabled=!0;return}a.disabled=!1,e.innerHTML=`<div class="line"><span>${h(s.price)} × ${c.nights} nights</span><span>${h(c.room)}</span></div>
    <div class="line"><span>GST 18%</span><span>${h(c.tax)}</span></div>
    <div class="line line--total"><span>Total</span><span>${h(c.total)}</span></div>
    <p class="fine">A request, not a charge. Nothing is taken until the house confirms.</p>`}function ge(t){const e=t.target;if(e instanceof HTMLFormElement){if(e.id==="search-form"){t.preventDefault();const a=Object.fromEntries(new FormData(e)),o=B(a,!1),s=e.querySelector(".form-error");if(o){s.textContent=o;return}s.textContent="";const i={destination:a.destination||"all",checkIn:a.checkIn||"",checkOut:a.checkOut||"",guests:a.guests||"2"};S(i);const r=`#/residences?${K(i)}`;location.hash===r?m():location.hash=r;return}if(e.id==="stay-dates"){t.preventDefault();const a=Object.fromEntries(new FormData(e)),o=B(a,!1),s=document.getElementById("stay-date-error");if(o){s.textContent=o;return}const{parts:i}=q();S({...v(),...a,destination:i[1]||"all"}),m();return}if(e.id==="book-form"){if(t.preventDefault(),e.dataset.locked)return;const a=Object.fromEntries(new FormData(e)),o=p(a.hotelId),s=N(o,a.roomId),i=document.getElementById("book-error");if(!o||!s)return;const r=Number(a.guests)>s.occupancy?`${s.name} sleeps ${s.occupancy}.`:"",c=(a.notes||"").trim().length>500?"Keep the note under 500 characters.":"",T=B(a,!0)||r||ne(a)||c;if(T){i.textContent=T;return}const f=$(s.price,a.checkIn,a.checkOut);if(!f){i.textContent="Add dates to see the total.";return}e.dataset.locked="1";const F={id:ie(),hotelId:o.id,roomId:s.id,hotelName:o.name,city:o.city,roomName:s.name,checkIn:a.checkIn,checkOut:a.checkOut,guests:Number(a.guests),name:a.name.trim(),email:a.email.trim(),phone:a.phone.trim(),notes:(a.notes||"").trim(),nights:f.nights,roomTotal:f.room,tax:f.tax,total:f.total,currency:"INR",status:"requested",createdAt:new Date().toISOString()};if(!X(F)){e.dataset.locked="",i.textContent="This browser could not store the request.";return}S({destination:o.id,checkIn:a.checkIn,checkOut:a.checkOut,guests:a.guests}),location.hash=`#/confirm/${F.id}`;return}if(e.id==="contact-form"){t.preventDefault();const a=Object.fromEntries(new FormData(e)),o=se(a),s=document.getElementById("contact-error");if(o){s.textContent=o;return}if(!te({name:a.name.trim(),email:a.email.trim(),phone:(a.phone||"").trim(),residence:a.residence,message:a.message.trim(),createdAt:new Date().toISOString()})){s.textContent="This browser could not store the note.";return}L=a.email.trim(),m()}}}function ve(t){var s;t.target.closest(".nav a")&&((s=document.querySelector(".nav"))==null||s.classList.remove("is-open"));const a=t.target.closest("[data-action]");if(!a)return;const o=a.dataset.action;o==="menu"&&C(),o==="reset-note"&&(L=null,m()),o==="withdraw"&&(ee(a.dataset.id,{status:"cancelled"}),m())}function we(t){if(t.target.id!=="sort-stays")return;const e=v();S(e);const a=`#/residences?${K({...e,sort:t.target.value})}`;location.hash===a?m():location.hash=a}function ke(t){var e;((e=t.target.form)==null?void 0:e.id)==="book-form"&&J()}function C(t){const e=document.querySelector(".nav"),a=document.querySelector(".menu-btn");if(!e||!a)return;const o=t===void 0?!e.classList.contains("is-open"):t;e.classList.toggle("is-open",o),a.setAttribute("aria-expanded",o?"true":"false"),a.textContent=o?"Close":"Menu",document.body.classList.toggle("nav-open",o)}function $e(){const t=document.querySelector(".site-header");t!=null&&t.classList.contains("over-hero")&&t.classList.toggle("is-scrolled",window.scrollY>40)}function Te(){document.addEventListener("submit",ge),document.addEventListener("click",ve),document.addEventListener("change",we),document.addEventListener("input",ke),window.addEventListener("hashchange",m),window.addEventListener("scroll",$e,{passive:!0}),window.addEventListener("resize",()=>{window.innerWidth>980&&C(!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&C(!1)}),location.hash?m():location.hash="#/"}Te();
