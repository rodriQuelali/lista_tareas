export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName} curso de react, {props.taskItems.filter(t => !t.done).length} 
    </h4>
)