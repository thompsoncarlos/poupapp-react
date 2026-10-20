export const ProgressBar = ({ percent }) => {
    return (
        <div className="">
            <div 
                className=""
                style={{
                    width: `${percent}%`
                }}
            >
                { percent}%
            </div>
        </div>
    )
}