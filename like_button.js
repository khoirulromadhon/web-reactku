const e = React.cloneElement;

function LikeButton(){
    return e (
        'button',
        {
            onClick: () => alert('berhasil')
        },
        'Like'
    );
}