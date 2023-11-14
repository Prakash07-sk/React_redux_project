

export default () => {
    return (
        <>
            <div className='pageloader'>
                {Array.from({ length: 12 }).map(_ => {
                    return (
                        <div className="card-loader">
                            <div className="loader-header"></div>
                            <div className="loader-content"></div>
                            <div className="loader-content"></div>
                            <div className="loader-content"></div>
                        </div>
                    );
                })}

            </div>

        </>
    );
}