export interface IDetailedParticipant {
  id: string;
  user_id: string;
  user_name: string;
  device: string;
  ip_address: string;
  location: string;
  network_type: string;
  microphone: string;
  camera: string;
  speaker: string;
  data_center: string;
  connection_type: string;
  join_time: string;
  leave_time: string;
  share_application: boolean;
  share_desktop: boolean;
  share_whiteboard: boolean;
  recording: boolean;
  status: string;
  pc_name: string;
  domain: string;
  mac_addr: string;
  harddisk_id: string;
  version: string;
  leave_reason: string;
}

export interface ISimpleParticipant {
  id: string;
  name: string;
  user_email: string;
}

export interface IGetParticipants {
  page_count: number;
  page_size: number;
  total_records: number;
  next_page_token: string;
  participants: Array<IDetailedParticipant> | Array<ISimpleParticipant>;
}
