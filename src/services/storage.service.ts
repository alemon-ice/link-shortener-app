import Storage from '@react-native-async-storage/async-storage'

import { IUrlData } from '../interfaces/Url'
import { STORAGE_KEYS } from '../utils/Storage'

export async function getAllUrls(): Promise<IUrlData[]> {
  const urls = await Storage.getItem(STORAGE_KEYS.URLS)

  return urls ? JSON.parse(urls) : []
}

export async function addNewURL(data: IUrlData) {
  const allUrls = await getAllUrls()

  const checkUrlExists = allUrls.some(url => url.longUrl === data.longUrl)

  if (checkUrlExists) return

  allUrls.push(data)

  await Storage.setItem(STORAGE_KEYS.URLS, JSON.stringify(allUrls))
}

export async function removeURL(longUrl: string) {
  const urls = (await getAllUrls()).filter(item => item.longUrl !== longUrl)
  
  await Storage.setItem(STORAGE_KEYS.URLS, JSON.stringify(urls))

  return urls
}