package com.example.fire_warning_app

import android.content.Context
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class Bottom : AppCompatActivity() {
    private lateinit var sharedPref: SharedPreferences
    private lateinit var bottomNavigationView: BottomNavigationView
    private lateinit var alarmImg: ImageView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_bottom)

        sharedPref = getSharedPreferences("MySharedPreferences", Context.MODE_PRIVATE)

        bottomNavigationView = findViewById(R.id.bottomNavigationView)
        alarmImg = findViewById(R.id.alarm_img)
        val fireDetectedValue = sharedPref.getBoolean("fireDetectedValue", false)

        if (fireDetectedValue) {
            alarmImg.visibility = View.VISIBLE
        } else {
            alarmImg.visibility = View.GONE
        }

        bottomNavigationView.setOnItemSelectedListener { menuItem ->
            when (menuItem.itemId) {
                R.id.layout_Home -> {
                    val UI_Fragment = UI_main()
                    replaceFragment(UI_Fragment)
                    true
                }
                R.id.layout_History -> {
                    val HistoryFragment = ImageListActivity()
                    replaceFragment(HistoryFragment)
                    true
                }
                R.id.layout_Sound -> {
                    val SoundFragment = SoundActivity()
                    replaceFragment(SoundFragment)
                    true
                }
                R.id.layout_info -> {
                    val InfoFragment = Info()
                    replaceFragment(InfoFragment)
                    true
                }
                else -> false
            }
        }

        bottomNavigationView.selectedItemId = R.id.layout_Home
    }

    private fun replaceFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .commit()
    }
}
