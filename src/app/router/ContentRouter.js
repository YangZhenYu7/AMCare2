/**
 * Created by yangzhenyu on 2017/7/20.
 */

import ReservateInfo from '../page/reservation/ReservateInfoPage';
import ReservaterCall from '../page/reservation/ReservaterCallPage'
import AccountInfo from '../page/acount/AccountInfoPage';
import Unspport from '../page/UnspportPage';
import About from '../page/acount/AboutPage';
import DrugQuery from '../page/drug/DrugQueryPage';
import DrugAdd from '../page/drug/DrugAddPage';
import ClinicInfo from '../page/clinic/ClinicInfoPage';
import PatientDiagnoseAll from '../page/diagnose/PatientDiagnoseAllPage';
import PatientDiagnoseToday from '../page/diagnose/PatientDiagnoseTodayPage';
import PatientDiagnoseHistory from '../page/diagnose/PatientDiagnoseHistoryPage';
import PatientDiagnoseDetailPage from '../page/patient/PatientDiagnoseDetailPage';
import PatientInfoPage from '../page/patient/PatientInfoPage';

class ContentRouter
{
    static router={"0":[ReservateInfo, ReservaterCall]
                    , '1':[PatientDiagnoseAll, PatientDiagnoseToday, PatientDiagnoseHistory]
                    , '2':[PatientDiagnoseDetailPage, PatientInfoPage]
                    , '3':[ClinicInfo]
                    , '4':[DrugQuery, DrugAdd]
                    , '7':[AccountInfo, About]}

    static getContentPage(category, type) {
        let pages = this.router[category];
        if (pages) {
            return pages[type] || Unspport;
        } else {
            return Unspport;
        }
    }
}

export default ContentRouter;