---
title: Synology and RAID Repair
date: '2019-04-16T22:12:03.286Z'
---

In my home, I use a Synology NAS (Network Attached Storage) as a web server, computer backup, and media content provider for video/picture/audio streaming.

With any server, it is very common to use redundancy functionality. The most common is RAID: at its most simple form, it writes all information to two separate drives, so that if either one fails, the data can be recovered from the other. For enterprise usage, this often is 5 or 10 times redundant (RAID5, RAID10). The upside of this concept is safety; the downside is that your usable space is significantly reduced, and the more times you need redundancy, the longer it takes to build those repair drives.

With that in mind, I recently upgraded my storage from a dual 3TB system to a dual 10TB system. The way that this upgrade is done:
  1. Remove one drive
  2. Replace the empty slot with a new disk (if there is data on this disk, it will be deleted. So be careful!)
  3. The NAS will now correctly complain that the RAID is broken -- these two disks inherently have different data now.
  4. Run a "Repair". This will copy all of the data to the new disk.
  5. Wait. This process can take several hours, depending on how big your drive is.
  6. Once done, remove the original drive, and repeat the process. This time, you're repairing _from_ the disk that you just repaired.

Conceptually, this process isn't tremendously painful. However, I ran into a few difficulties that may be useful to others in the future.

First, make sure you set up SSH. Having terminal access to the machine proved vital, as the GUI did not allow for some operations.
  1. Turn on SSH within the GUI.
  2. Note your IP (this can also typically be found in the GUI)
  3. Set up your SSH key: `ssh-keygen -t rsa -b 2048`. Make sure to give it a passcode.
  4. Copy your SSH key to the server: `ssh-copy-id <username>@<ip>`
  5. Log in with your account password.
  6. Test that ssh works: `ssh <username>@<ip>`

You can follow progress of your repair: `cat /proc/mdstat`

If you see an estimated finish time in a matter of days, it is likely that your drive doesn't have its write cache enabled. Some drives (my 10TB Seagate ST10000VN0004-1ZD101 drives had this exact problem) -- despite the fact that the Synology GUI says that there will be no performance difference, it is the reason that the finish time is so slow. Some research shows that there is a bug between Synology and Seagate for this specific model of hard drive.

Before we continue, its important to note that Synology explicitly recommends _not_ doing this. Performing the following steps is unsupported and very risky, but if you're willing to take on this risk, you can hard-enable the drive's write cache.
  1. Sign in to admin access: `sudo -i`
  2. Look for the disk information: `cat /proc/diskstats` (mine were named `sda` and `sdb`)
  3. Find information on the disk to make sure it's the one that you want: `hdparm -I /dev/<disk id>`
  4. Turn on the write cache: `hdparm -W1 /dev/<disk id>`
  5. When you're done, turn off the write cache: `hdparm -W0 /dev/<disk id>`

Doing this lowered the total time to complete my upgrade process (which was only 6TB total) from an estimation of 9 days to about 12 hours.