//COMPONENT
import GlobalDialog from "./global/GlobalDialog";
import { useDialog } from "./hooks/useDialog";


export default function App() {

    const dialog1 = useDialog();
    const dialog2 = useDialog();


    return (
        <>

            <button onClick={dialog1.handleOpen}>
                Dialog
            </button>

            <GlobalDialog
                open={dialog1.open}
                onClose={dialog1.handleClose}
            />

            <br />

            <button onClick={dialog2.handleOpen}>
                Dialog2
            </button>

            <GlobalDialog
                open={dialog2.open}
                onClose={dialog2.handleClose}
            />

        </>
    )
}