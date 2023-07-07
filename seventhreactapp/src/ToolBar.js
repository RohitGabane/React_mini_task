export function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }
  
  function Button(obj) {
    console.log(obj)
    return (
      <button onClick={obj.onClick}>
        {obj.children}
      </button>
);
}