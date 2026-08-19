import "./gallery.css"

export function OneImageRow({img}) {
    return (
        <div className="one-image-row row">
            <img src={img} />
        </div>
    )
}

export function TwoImageRow({imgs}) {
    return (
        <div className="two-image-row row">
            <img src={imgs[0]} />
            <img src={imgs[1]} />
        </div>
    )
}

export function ThreeImageRow({img1, img2, img3}) {
    return (
        <div className="three-image-row row">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </div>
    )
}

export function FourImageRow({imgs}) {
    return (
        <div className="four-image-row row">
            <img src={imgs[0]} />
            <img src={imgs[1]} />
            <img src={imgs[2]} />
            <img src={imgs[3]} />
        </div>
    )
}

export function FiveImageRow({imgs}) {
    return (
        <div className="five-image-row row">

            <img src={imgs[0]} />
            <img src={imgs[1]} />
            <img src={imgs[2]} />
            <img src={imgs[3]} />
            <img src={imgs[4]} />
          
        </div>
    )
}

export function ThreeImageBlock({img1, img2, img3, reverse=false}) {
    if (reverse) {
        return (
            <div className="three-block row">
            <div className="block-two-stack">
                <img src={img2} />
                <img src={img3} />
            </div>
            <img src={img1} className="three-block-big" />
        </div>
        );
    }
    return (
        <div className="three-block row">
            <img src={img1} className="three-block-big" />
            <div className="block-two-stack">
                <img src={img2} />
                <img src={img3} />
            </div>
        </div>
    )
}