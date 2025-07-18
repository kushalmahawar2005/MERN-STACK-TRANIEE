import Dineout from "./Dineout";
import './Dineout.css'
const items = [
    { src: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661032847/vyrns7lhvg4dohnop0g0.jpg', title: 'Clock Tower' },
    { src: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1687935686/d440578ff4e4492df22d30391b55cfca.jpg', title: 'RJ 14' },
    { src: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661204585/klblgorphccnnjzwmbpf.jpg', title: 'Dyore Experience' },
    { src: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1709806759/eba26fcd125952cd61b3c40c5f8efacd.jpg', title: 'Nibs Cafe And Chocolataria' },
    { src: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661382007/a1zb8rt5gadiivcgzvxr.jpg', title: 'Nibs Experia' },
    { src: 'https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661207802/fcqqtoork3lwsgzm6gna.jpg', title: 'Jaipur Adda' },
];

export default function Dineoutcon() {
    return (
        <div className="Dineoutcon-container">
            {items.map((item, index) => (
                <Dineout
                    key={index}
                    src={item.src}
                    title={item.title}
                    idx={index}  
                />
            ))}
        </div>
    );
}
