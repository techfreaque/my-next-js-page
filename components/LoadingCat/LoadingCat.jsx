export default function LoadingCat({loading}) {
    return (<div className={"cat-box" + (loading ? "" : " hidden") }
        style={
            {
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                display: "flex",
                flex: "1",
                flexDirection: "column",
                justifyContent: "flex-start",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                zIndex: 100,
                WebkitTransitionDuration: "opacity 4s",
                MozTransitionDuration: "opacity 4s",
                OTransitionDuration: "opacity 4s",
                transitionDuration: "opacity 4s",
            }
    }>
        <div className="cat">
            <div className="cat__body"></div>
            <div className="cat__body"></div>
            <div className="cat__tail"></div>
            <div className="cat__head"></div>
        </div>
    </div>)
}
