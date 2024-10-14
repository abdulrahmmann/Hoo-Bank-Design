export function Stats() {
    return (
        <section id={"Stats-section"} className={`mt-4 sm:mt-16 relative`}>
            <div className={`flex flex-col sm:flex-row flex-wrap justify-between items-center`}>
                <StatsComponent num={'3800+'} title={'User Active'}/>
                <StatsComponent num={'230+'} title={'TRUSTED BY COMPANY'}/>
                <StatsComponent num={'$230M+'} title={'TRANSACTION'}/>
                <StatsComponent num={'330+'} title={'Rates'}/>
            </div>
        </section>
    );
}

export function StatsComponent({num, title}) {
    return (
        <div className={`flex justify-center items-center gap-6  hover:opacity-[.6] stats-border-right`}>
            <div className={`text-[24px] sm:text-[32px] text-white font-poppins font-bold leading-[50px]`}>
                {num}
            </div>
            <div className={`text-[18px] text-gradient font-poppins font-normal leading-5 whitespace-nowrap`}>
                {title}
            </div>
        </div>
    );
}