(this.webpackJsonpairlines=this.webpackJsonpairlines||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/loading.90cd3d0f.svg"},43:function(e,a,t){e.exports=t(71)},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(35),i=t.n(r),c=t(8),s=t(9),o=t(16),m=t(11),u=t(10),d=t(18),h=t.n(d),E=t(2),f=n.a.createContext(),p=n.a.createContext(),g=function(){return n.a.createElement("div",{className:"button-row"},n.a.createElement(c.b,{to:"/",className:"button"},"Back to list"))},v=t(14),_=t.n(v),N=function(){var e=Object(l.useContext)(p),a=e.departure,t=e.arrival,r=e.airline,i=e.flight,c=e.live,s=c?"":"border-top";return n.a.createElement("div",{className:"flight-details__holder ".concat(s)},n.a.createElement(g,null),n.a.createElement("div",{className:"flight-details"},n.a.createElement("div",{className:"flight-details__overview"},n.a.createElement("h3",null,r.name," ",i.icao),n.a.createElement("p",{className:"meta"},a.airport," (",a.iata,") - ",t.airport," (",t.iata,")")),n.a.createElement("div",{className:"flight-details__arrival"},n.a.createElement("span",{className:"uppercase"},"Estimated arrival"),n.a.createElement("p",{className:"big"},n.a.createElement(_.a,{date:t.estimated,format:"HH:MM"})),n.a.createElement("p",{className:"delay"},"Delay: ",t.delay," minute(s)")),c&&n.a.createElement("div",{className:"flight-details__meta"},n.a.createElement("h4",null,"Live data ",n.a.createElement("span",{className:"live"})),n.a.createElement("p",null,"Current altitude: ",n.a.createElement("strong",null,c.altitude," metres")),n.a.createElement("p",null,"Current direction: ",n.a.createElement("strong",null,c.direction," degrees")),n.a.createElement("p",null,"Current speed: ",n.a.createElement("strong",null,c.speed_horizontal," KM/h")))))},b=function(e){var a=e.flight,t=a.airport,l=a.id;return e.flightData.live?n.a.createElement("nav",{className:"flight-detail__controls"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c.c,{to:"/flight/".concat(t,"/").concat(l),exact:!0},"View details")),n.a.createElement("li",null,n.a.createElement(c.c,{to:"/flight/".concat(t,"/").concat(l,"/globe"),exact:!0},"View flight on globe")))):null},k=t(41),y=function(){var e=Object(l.useContext)(p),a=e.airline,t=e.flight,r=e.live,i=[{color:"red",coordinates:[r.latitude,r.longitude],value:100}];return n.a.createElement("div",{className:"flight-globe"},n.a.createElement("div",{className:"flight-globe__top-bar"},n.a.createElement(g,null),n.a.createElement("div",{className:"flight-globe__details"},n.a.createElement("h3",null,a.name," ",t.icao),n.a.createElement("p",{className:"meta"},"Current position: ",r.latitude,",",r.longitude),n.a.createElement("p",{className:"meta"},"Current speed: ",r.speed_horizontal," KM/h"))),n.a.createElement(k.a,{className:"flight-globe",markers:i,markerOptions:{activeScale:1,enableTooltip:!1,exitAnimationDuration:0},focus:[r.latitude,r.longitude],focusOptions:{animationDuration:5e3,distanceRadiusScale:2,easingFunction:["Quadratic","InOut"],enableDefocus:!1},globeOptions:{enableGlow:!1,cloudsOpacity:1}}))},O=t(40),x=t.n(O),C=function(){return n.a.createElement("img",{className:"loading",src:x.a,alt:"loading"})},D=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={redirect:!1,loaded:!1,flightData:null},e}return Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this,a=this.props.match.params,t=a.airport,l=a.id;h()("".concat("https://g4xyr7m9h6.execute-api.us-east-1.amazonaws.com/dev/flights","/").concat(t,"/").concat(l)).then((function(a){a.data&&e.setState({flightData:a.data.data[0],loaded:!0})})).catch((function(a){e.setState({redirect:!0,loaded:!0})}))}},{key:"render",value:function(){var e=this.state,a=e.redirect,t=e.loaded,l=e.flightData;return a?n.a.createElement(E.a,{to:"/not-found"}):t?n.a.createElement("div",{className:"flight-detail__panel"},n.a.createElement(p.Provider,{value:l},t&&l&&n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{flight:this.props.match.params,flightData:l}),n.a.createElement(E.d,null,n.a.createElement(E.b,{path:"/flight/:airport/:id/globe",render:function(){return n.a.createElement(y,null)}}),n.a.createElement(E.b,{path:"/flight/:airport/:id/",render:function(){return n.a.createElement(N,null)}}))))):n.a.createElement(C,null)}}]),t}(l.Component),j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement("h3",null,"Flight not found"),n.a.createElement("p",null,"Please try again"))},w=function(){var e=Object(l.useContext)(f);return n.a.createElement("nav",{className:"flight-link-panel"},n.a.createElement("div",{className:"flight-link__headers","aria-hidden":"true"},n.a.createElement("p",{className:"flight-link__header"},"Flight"),n.a.createElement("div",null,n.a.createElement("p",{className:"flight-link__header flight-link__headers__depart"},"Depart"),n.a.createElement("p",{className:"flight-link__header"},"Arrival")),n.a.createElement("p",{className:"flight-link__header"},"Dest.")),n.a.createElement("div",{className:"flight-link-panel__options"},e.map((function(e){return n.a.createElement(c.c,{to:"/flight/".concat(e.departure.icao,"/").concat(e.flight.icao),key:"".concat(e.departure.icao,"-").concat(e.flight.icao),className:"flight-link"},n.a.createElement("div",{className:"flight-link__identifier"},n.a.createElement("strong",null,e.flight.icao," ",e.live&&n.a.createElement("span",{className:"live"},"live")),n.a.createElement("span",null,e.airline.name)),n.a.createElement("div",{className:"flight-link__times"},n.a.createElement("div",{className:"flight-link__times__departure"},n.a.createElement(_.a,{date:e.departure.estimated,format:"HH:MM"}),n.a.createElement("span",null," / ",n.a.createElement("strong",{className:"delay"},e.departure.delay,"\xa0min(s)"))),n.a.createElement("div",{className:"flight-link__times__arrival"},n.a.createElement(_.a,{date:e.arrival.estimated,format:"HH:MM"}),n.a.createElement("span",null," / ",n.a.createElement("strong",{className:"delay"},e.arrival.delay,"\xa0min(s)")))),n.a.createElement("div",{className:"flight-link__destination"},n.a.createElement("strong",null,e.arrival.iata),n.a.createElement("span",null,e.arrival.airport)))}))))},M=(t(70),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null,flights:null,loaded:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h()("https://g4xyr7m9h6.execute-api.us-east-1.amazonaws.com/dev/flights").then((function(a){var t=a.data.data.filter((function(e){return null!=e.flight.icao}));e.setState({flights:t,loaded:!0})})).catch((function(a){e.setState({error:a.message,loaded:!0})}))}},{key:"renderError",value:function(){return this.state.error?n.a.createElement("p",null,this.state.error):null}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.flights;return e.loaded?n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"brand"},n.a.createElement("h1",null,"The ",n.a.createElement("em",null,"delayed")," FlightTracker"),n.a.createElement("p",null,"Your source of currently delayed flights!")),this.renderError(),!a&&t&&n.a.createElement(f.Provider,{value:t},n.a.createElement(E.d,null,n.a.createElement(E.b,{path:"/flight/:airport/:id",component:D}),n.a.createElement(E.b,{path:"/not-found",component:j}),n.a.createElement(E.b,{path:"/",exact:!0,component:w}),n.a.createElement(E.a,{to:"/not-found"})))):n.a.createElement(C,null)}}]),t}(l.Component));i.a.render(n.a.createElement(c.a,null,n.a.createElement(M,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ad5138ef.chunk.js.map