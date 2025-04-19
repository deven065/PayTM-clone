export const Balance = ({ value }) => {
    return (
        <div className="flex">
            <div className="font-bold text-1g">
                Your Balance
            </div>
            <div className="font-semibold m1-4 text-1g">
                Rs {value}
            </div>
        </div>
    )
}