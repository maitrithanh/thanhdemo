import styles from './JobApplyList.module.css'

export default function JobApplyList ({id, jobapplyCompany, jobapplySalary, jobapplyPosition, jobapplyLocation, jobapplyDescription, jobapplySkill}) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      var money = formatter.format(Number(jobapplySalary));
    return (
    <div>
        <div className= {`m-4`}>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src="/images/job.png" alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">   
                    {jobapplyCompany}
                </div>
                <p class="text-gray-700 text-base">
                  <strong>Salary: </strong>{money}
                </p>
                <p class="text-gray-700 text-base">
                  <strong>Position: </strong>{jobapplyPosition}
                </p>
                <p class="text-gray-700 text-base">
                  <strong>Location: </strong>{jobapplyLocation}
                </p>
                <strong>Description: </strong>
                <p className={`text-gray-700 text-base ${styles.descriptionWrap}`}>
                    {jobapplyDescription}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJS</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NodeJS</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
              </div>
            </div>
          </div>
    </div>
  )
}

