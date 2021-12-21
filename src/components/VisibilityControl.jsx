
export const VisibilityControl = props =>{
    return (
        <div className="form-ckeck">
            <input 
                type="checkbox"
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                show {props.descriptions}
            </label>
        </div>
    )
}