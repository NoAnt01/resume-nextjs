import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'University of Paichai',
      subTitle: 'Computer Engineering',
      startedAt: '2020-03',
      // endedAt: '2027-02',
    },
    {
      title: 'Dongsan High School',
      subTitle: 'Graduated',
      startedAt: '2017-03',
      endedAt: '2020-02',
    },
  ],
};

export default education;
