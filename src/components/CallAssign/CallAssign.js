import Styles from './CallAssign.module.css';
export default function CallAssign() {
  return (<table>
  <tr>
      <th>Complaint</th>
      <th>Status</th>
  </tr>
  <tr>
      <td>Computer Won’t Turn On</td>
      <td className={Styles.main}>
          <input className={Styles.button} value='View'type='button'/>
          <input className={Styles.button} value='Edit' type='button'/>
          <input className={Styles.button} value='Delete' type='button'/>                        
      </td>
  </tr>
  <tr>
      <td>Computer Turns On, But Still Doesn’t Work</td>
      <td className={Styles.main}>
          <input className={Styles.button} value='View'type='button'/>
          <input className={Styles.button} value='Edit' type='button'/>
          <input className={Styles.button} value='Delete' type='button'/>                        
      </td>
  </tr>
  <tr>
      <td>Computer Screen Freezess</td>
      <td className={Styles.main}>
          <input className={Styles.button} value='View'type='button'/>
          <input className={Styles.button} value='Edit' type='button'/>
          <input className={Styles.button} value='Delete' type='button'/>                        
      </td>
  </tr>
  <tr>
      <td>CMOS Error</td>
      <td className={Styles.main}>
          <input className={Styles.button} value='View'type='button'/>
          <input className={Styles.button} value='Edit' type='button'/>
          <input className={Styles.button} value='Delete' type='button'/>                        
      </td>
  </tr>
  <tr>
      <td>Blue Screen of Death</td>
      <td className={Styles.main}>
          <input className={Styles.button} value='View'type='button'/>
<input className={Styles.button} value='Edit' type='button'/>
          <input className={Styles.button} value='Delete' type='button'/>                        
      </td>
  </tr>
</table>);
}