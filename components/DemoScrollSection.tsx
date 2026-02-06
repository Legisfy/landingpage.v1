
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export const DemoScrollSection: React.FC = () => {
    return (
        <section id="demonstracao" className="pt-0 pb-0 lg:-mt-20 md:-mt-16 -mt-12 relative z-10">
            <ContainerScroll
                titleComponent={null}
            >
                <div className="h-full w-full bg-[#030712] relative overflow-hidden">
                    <img
                        src="https://zdgapmcalocdvdgvbwsj.supabase.co/storage/v1/object/public/AuraLogo/dash%20aura.png?v=2"
                        alt="Aura Real Dashboard"
                        className="w-full h-full object-fill"
                    />
                </div>
            </ContainerScroll>
        </section>
    );
};

export default DemoScrollSection;
