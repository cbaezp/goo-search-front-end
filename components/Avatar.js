function Avatar({url, className}) {
    return <img 
    loading = "lazy"
    src={url}
    alt="profile picture"
    className={`h-10 w-10 aspect-auto rounded-full object-cover
    transition duration-150 transform hover:scale-110 ${className}`}
    />
}

export default Avatar
