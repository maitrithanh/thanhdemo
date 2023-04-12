import styles from './modal.module.css'

export default function Modal({id,children}) {
    return (
        <div className= {`relative z-10 hidden`} aria-labelledby="modal-title" role="dialog" aria-modal="true" id={`${id}`}>
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className='flex items-center mb-2'>
                            <span className='ml-2 text-lg font-bold'>Infomation Job Apply</span>
                            <button type="button" id="exit" onClick={Exit} className={`inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto ${styles.rightBox}`}>X</button>
                        </div>
                        <hr/>
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    function Exit() {
        let modal = document.getElementById(`${id}`);
        modal.classList.add("hidden");
    }
}

