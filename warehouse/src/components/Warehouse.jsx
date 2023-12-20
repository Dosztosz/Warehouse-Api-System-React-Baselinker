import QuantityButton from './QuantityButton'

function Warehouse() {
    return(
        <div className="wrapper">
            <div className="button-list">
                <QuantityButton title="Synchronizacja Magazynu"/>
                <QuantityButton title="Wyświetl 0"/>
            </div>
            <div className='warehouse-table'>
                <table className='w-100'>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <td>Noga metalowa 8x2 60x72</td>
                        <td>10</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Warehouse