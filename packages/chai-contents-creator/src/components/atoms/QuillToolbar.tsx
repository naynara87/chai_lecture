// import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      {/* <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select> */}
      {/* <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select> */}
      <select className="ql-header" defaultValue="3">
        <option value="1">헤더1</option>
        <option value="2">헤더2</option>
        <option value="3">헤더3</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" title="볼드" />
      <button className="ql-italic" title="기울이기" />
      <button className="ql-underline" title="밑줄" />
      <button className="ql-strike" title="강조" />
    </span>
    {/* <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span> */}
    {/* <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span> */}
    <span className="ql-formats">
      {/* <select className="ql-align" /> */}
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    {/* <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span> */}
    {/* <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span> */}
    {/* <span className="ql-formats">
      <button className="ql-submit" onClick={handleSubmitHtml}>
        <SaveAltOutlinedIcon />
      </button>
    </span> */}
  </div>
);

export default QuillToolbar;
