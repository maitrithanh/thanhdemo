import styles from './JobApplyList.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faPenToSquare, faCircleInfo, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { auth, db } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

type jobApllyListProps = {
  id: string;
  user: any;
  jobapplyCompany: string;
  jobapplySalary: Float32Array;
  jobapplyPosition: string;
  jobapplyLocation: string;
  jobapplyDescription: string;
  jobapplySkill: string;
}

export default function JobApplyList ({id, user, jobapplyCompany, jobapplySalary, jobapplyPosition, jobapplyLocation, jobapplyDescription, jobapplySkill}: jobApllyListProps) {
  const [loggedInUser, _loading, _error] = useAuthState(auth);
  ShowCardJobApply();
  const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    var money = formatter.format(Number(jobapplySalary));
    return (
    <div className='jobCardApply' id={`${user}`}>
        <div className= {`m-4`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className='relative'>
                <Image priority className="w-full" src="/images/job.png" alt="Sunset in the mountains" width="100" height="100" layout="responsive" objectFit="contain" />
                <div className='absolute top-0 ml-1 right-1'>
                  {/* btn edit */}
                  <button className=''>
                    <div className={`${styles.btnCustom} p-2 rounded-lg backdrop-blur-sm bg-white/30`}>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{fontSize: 22, color: 'white'}}
                      />
                    </div>
                  </button>
                  {/* btn detail */}
                  <button className='m-1'>
                    <div className={`${styles.btnCustom} p-2 rounded-lg backdrop-blur-sm bg-white/30`}>
                      <FontAwesomeIcon
                        icon={faCircleInfo}
                        style={{fontSize: 22, color: 'white'}}
                      />
                    </div>
                  </button>
                  {/* btn delete */}
                  <button className=''>
                    <div className={`${styles.btnCustom} p-2 rounded-lg backdrop-blur-sm bg-white/30`}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{fontSize: 22, color: 'white'}}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">   
                    {jobapplyCompany}
                </div>
                <p className="text-gray-700 text-base">
                  <strong>Salary: </strong>{money}
                </p>
                <p className="text-gray-700 text-base">
                  <strong>Email Test: </strong>{user}
                </p>
                <p className="text-gray-700 text-base">
                  <strong>Position: </strong>{jobapplyPosition}
                </p>
                <p className="text-gray-700 text-base">
                  <strong>Location: </strong>{jobapplyLocation}
                </p>
                <strong>Description: </strong>
                <p className={`bg-gray-100 px-2 rounded text-gray-700 text-base ${styles.descriptionWrap}`}>
                    {jobapplyDescription}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{jobapplySkill}</span>
              </div>
            </div>
          </div>
    </div>
  )
  function ShowCardJobApply() {
    var cardJobApply = document.getElementsByClassName("jobCardApply");
    for (let i = 0; i < cardJobApply.length; i++) {
      if(cardJobApply.item(i)?.id != loggedInUser?.email) {
        cardJobApply?.item(i)?.classList.add("hidden");
      }
    }
  }
}


